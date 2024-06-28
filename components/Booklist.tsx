import { IBook } from "@/app/(tabs)/home";
import { FlatList, Image, Text, View } from "react-native";
interface IProps {
	books: IBook[];
}
export function Booklist({ books }: IProps) {
	return (
		<FlatList
		className="max-h-[94%]"
			data={books}
			renderItem={({ item }) => (
				<View className="items-center justify-center bg-green-300 rounded-lg p-4 m-2 shadow-md">
					<Image
						source={{
							uri: item.cover,
						}}
						alt={item.title}
						className="w-[75px] h-[100px] rounded-lg mb-2 bg-cover"
					/>
					<Text className="text-xs font-bold mb-2">{item.title}</Text>
					<Text
						className="text-xs mr-30 text-gray-600"
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						{item.summary}
					</Text>
				</View>
			)}
		/>
	);
}
