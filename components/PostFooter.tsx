import { Text } from "./Themed"

export const PostFooter = ({
	replies,
	likes,
}: {
	replies: number
	likes: number
}) => {
	return (
		<Text style={{ color: "gray" }}>
			{replies} replies - {likes} likes
		</Text>
	)
}
