import Images from "@/constants/Images";
import { Image, Pressable, Text, View } from "react-native";

interface ICustomButton {
	title: string;
	handlePress?(): void;
	containerStyles?: string;
	textStyles?: string;
	landing?: boolean;
}

export default function CustomButton({
	title,
	handlePress,
	containerStyles,
	textStyles,
	landing,
}: ICustomButton) {
	return (
		<Pressable
			className={`${
				landing
					? undefined
					: `${containerStyles} bg-green-500 rounded-md justify-center items-center h-[35px] w-[120px]`
			} active:opacity-80`}
			onPress={handlePress}
		>
			{landing ? (
				<Image
					className="w-[600px] h-[600px]"
					source={Images.landing}
				/>
			) : (
				<Text className={`${textStyles} text-2xl text-white`}>
					{title}
				</Text>
			)}
		</Pressable>
	);
}
