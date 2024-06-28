import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
export default function RootLayout() {
	useFonts({
		mono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}
