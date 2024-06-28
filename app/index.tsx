import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
export default function Index() {
	return (
		<SafeAreaView className="flex-1 justify-center items-center">
			<CustomButton
				handlePress={() => router.push("/signin")}
				landing={true}
				title=""
			/>
			<StatusBar style="inverted" />
		</SafeAreaView>
	);
}
