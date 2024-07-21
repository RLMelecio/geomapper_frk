import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="w-full">
      <Text className="text-center text-red-600">Tests</Text>
      <Link href="/home">Go To Tabs</Link>
    </View>
  );
}
