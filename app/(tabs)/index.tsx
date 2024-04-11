import { RefreshControl, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Lottie from "lottie-react-native"
import { useContext, useRef } from "react"
import { ThreadsContext } from "@/context/thread-context"
import { ThreadsItem } from "@/components/ThreadsItem"

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
					<ThreadsItem key={thread.id} {...thread} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}
