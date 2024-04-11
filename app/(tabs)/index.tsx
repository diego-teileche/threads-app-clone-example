import { Platform, RefreshControl, ScrollView, StyleSheet } from "react-native"

import EditScreenInfo from "@/components/EditScreenInfo"
import { Text, View } from "@/components/Themed"
import { SafeAreaView } from "react-native-safe-area-context"
import Lottie from "lottie-react-native"
import { useRef } from "react"

export default function TabOneScreen() {
	const animationRef = useRef<Lottie>(null)

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
			</ScrollView>
		</SafeAreaView>
	)
}
