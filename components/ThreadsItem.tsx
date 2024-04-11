import { StyleSheet, View } from "react-native"
import { Thread } from "@/types/threads"
import { Text } from "./Themed"
import { Image } from "expo-image"
import { PostLeftSide } from "./PostLeftSide"
import { PostHeading } from "./PostHeading"
import { PostFooter } from "./PostFooter"
import { BottomIcons } from "./BottomIcons"

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

export const ThreadsItem = (thread: Thread): JSX.Element => {
	return (
		<View style={styles.container}>
			<PostLeftSide {...thread} />

			<View style={{ gap: 10, flexShrink: 1 }}>
				<PostHeading
					name={thread.author.name}
					createdAt={thread.createdAt}
					verified={thread.author.verified}
				/>

				<Text style={{ marginTop: 5 }}>{thread.content}</Text>

				{thread.image && (
					<Image
						source={thread.image}
						style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
						placeholder={blurhash}
						contentFit="cover"
						transition={200}
					/>
				)}

				<BottomIcons />

				<PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 6,
		paddingBottom: 30,
	},
})
