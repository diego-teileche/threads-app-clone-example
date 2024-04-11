import { Platform, RefreshControl, ScrollView, StyleSheet } from "react-native"

import EditScreenInfo from "@/components/EditScreenInfo"
import { Text, View } from "@/components/Themed"
import { SafeAreaView } from "react-native-safe-area-context"
import Lottie from "lottie-react-native"
import { useContext, useRef } from "react"
import { createRandomUser } from "@/utils/generate-dommy-data"
import { ThreadsContext } from "@/context/thread-context"

export default function TabOneScreen() {
	const animationRef = useRef<Lottie>(null)
	const threads = useContext(ThreadsContext)

	return (
		<SafeAreaView>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 10,
				}}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							animationRef.current?.play()
						}}
						tintColor={"transparent"}
					/>
				}
			>
				<Lottie
					ref={animationRef}
					source={require("../../assets/images/threads.json")}
					loop={false}
					autoPlay
					style={{ width: 90, height: 90, alignSelf: "center" }}
				/>

				{threads.map((thread) => (
					<Text key={thread.id}>{thread.author.name}</Text>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}
