import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons"
import { View, useColorScheme } from "react-native"

export const BottomIcons = () => {
	const iconSize = 20
	const currentTheme = useColorScheme()
	const iconColor = currentTheme === "dark" ? "white" : "black"

	return (
		<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
			<FontAwesome name="heart-o" size={iconSize} color={iconColor} />
			<Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
			<AntDesign name="retweet" size={iconSize} color={iconColor} />
			<Feather name="send" size={iconSize} color={iconColor} />
		</View>
	)
}
