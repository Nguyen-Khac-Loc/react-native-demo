import CustomButton from "@/components/CustomButton";
import axios from "axios";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [alert, setAlert] = useState({
		message: "",
		isSuccess: false,
	});
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const handleLogin = async () => {
		try {
			const response = await axios.get("http://192.168.0.102:3000/users");
			// const response = await axios.get("http://172.20.160.1:3000/users");
			const users = response.data;
			const user = await users.find(
				(user: { username: string; password: string }) =>
					user.username === username && user.password === password
			);
			if (user) {
				setAlert({ message: "Đăng nhập thành công!", isSuccess: true });
				router.replace("/home");
			} else {
				setAlert({
					...alert,
					message: "Tài khoản hoặc mật khẩu không đúng!!",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setAlert({
				...alert,
				message: "Đã có lỗi xảy ra. Hãy thử lại sau.",
			});
		}
	};
	const togglePasswordVisibility = () => {
		setPasswordVisible(!isPasswordVisible);
	};
	return (
		<SafeAreaView className="flex-1 items-center justify-center">
			<Text className="text-3xl font-semibold text-green-500">
				ĐĂNG NHẬP
			</Text>
			<TextInput
				className="bg-green-300 w-[300px] rounded-lg mb-2 pl-2"
				placeholder="Tài khoản"
				value={username}
				onChangeText={setUsername}
			/>
			<View className="flex-row">
				<TextInput
					className="bg-green-300 w-[300px] rounded-lg pl-2"
					placeholder="Mật khẩu"
					value={password}
					onChangeText={setPassword}
					secureTextEntry={!isPasswordVisible}
				/>
				<Pressable onPress={togglePasswordVisibility}>
					<Text>{isPasswordVisible ? "Hide" : "Show"}</Text>
				</Pressable>
			</View>
			{alert.message ? (
				<Text
					className={`text-sm text-center ${
						alert.isSuccess ? "text-green-600" : "text-red-600"
					}`}
				>
					{alert.message}
				</Text>
			) : null}
			<CustomButton
				title={"Đăng nhập"}
				handlePress={() => handleLogin()}
				containerStyles="mt-3"
			/>
			<View className="mt-2 flex-row gap-2">
				<Text>Bạn chưa có tài khoản?</Text>
				<Link
					href="/signup"
					className="text-emerald-600"
				>
					Đăng kí ngay!
				</Link>
			</View>
		</SafeAreaView>
	);
}
