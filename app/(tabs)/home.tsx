import { Booklist } from "@/components/Booklist";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export interface IBook {
	title: string;
	cover: string;
	summary: string;
}
const url = "https://potterhead-api.vercel.app/api/books";
export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		fetchBooks();
	}, []);
	async function fetchBooks() {
		const res = await fetch(url);
		if (!res.ok) {
			setIsLoading(false);
			setIsError(true);
			return;
		}
		const books = await res.json();
		setBooks(books);
		setIsLoading(false);
	}
	if (isLoading)
		return (
			<View className="mt-[50vh]">
				<ActivityIndicator
					color="#00ff00"
					size="large"
				/>
				<Text className="text-center text-xl">Đang tải..😋😋😋</Text>
			</View>
		);
	if (isError)
		return (
			<Text
				className="text-xl pt-[50vh] text-center"
				style={{ fontFamily: "mono" }}
			>
				Có lỗi xảy ra.!!🤯🤯
			</Text>
		);
	return (
		<View className="pt-[50px]">
			<Text
				className="text-3xl text-center"
				style={{ fontFamily: "mono" }}
			>
				HARRY POTTER API
			</Text>
			<Booklist books={books} />
			<StatusBar style="inverted" />
		</View>
	);
}
