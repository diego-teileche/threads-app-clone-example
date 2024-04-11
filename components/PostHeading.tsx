import { timeAgo } from "@/utils/timeAgo"
import { Feather, MaterialIcons } from "@expo/vector-icons"
import { View } from "react-native"
import { Text } from "./Themed"

export const PostHeading = ({
	name,
	createdAt,
	verified,
}: {
	name: string
	createdAt: string
	verified: boolean
}) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				flexGrow: 1,
				marginTop: 10,
				marginLeft: 5,
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
				<Text style={{ fontWeight: "500" }}>{name}</Text>
				{verified && (
					<MaterialIcons name="verified" size={14} color={"#60a5fa"} />
				)}
			</View>

			<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
				<Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
				<Feather name="more-horizontal" size={14} color={"gray"} />
			</View>
		</View>
	)
}
