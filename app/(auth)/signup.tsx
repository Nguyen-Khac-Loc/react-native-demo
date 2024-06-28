import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import React from 'react';
import { Alert, SafeAreaView, Text, View } from "react-native";



export default function SignUp() {
	return (
		<SafeAreaView className="flex-1 items-center justify-center">
			<Text className="text-3xl font-semibold text-red-600">
				ĐĂNG KÍ
			</Text>
			<CustomButton title={'Đăng kí'} handlePress={() => Alert.alert("Chức năng đang được phát triển. Hãy quay lại sau.😴")} />
			<View className="pt-5 flex-row gap-2">
				<Text>
					Bạn đã có tài khoản?
				</Text>
				<Link
					href="/signin"
					className="text-emerald-600"
				>
					Đăng nhập ngay!
				</Link>
			</View>
		</SafeAreaView>
	);
};
