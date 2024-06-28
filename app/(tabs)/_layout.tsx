import { Tabs } from "expo-router";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";
export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				options={{
					tabBarLabel: "Trang chủ",
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
				name="home"
			/>
			<Tabs.Screen
				options={{
					tabBarLabel: "",
					tabBarIcon: ({ size }) => (
						<View
							style={{
								height: 60,
								width: 60,
								borderRadius: 50,
								backgroundColor: "#00ff00",
								marginBottom: 20,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<AntDesign
								name="search1"
								size={size}
								color="#fff"
							/>
						</View>
					),
				}}
				name="explore"
			/>
			<Tabs.Screen
				options={{
					tabBarLabel: "Tài khoản",
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name="team"
							size={size}
							color={color}
						/>
					),
				}}
				name="profile"
			/>
		</Tabs>
	);
}
