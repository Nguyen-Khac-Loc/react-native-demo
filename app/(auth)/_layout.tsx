import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
	return (
		<>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="signin" />
				<Stack.Screen name="signup" />
			</Stack>
			<StatusBar
				backgroundColor="#161622"
				style="light"
			/>
		</>
	);
}
