import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />
      <View className="p-6 flex-1">
        <Text className="text-3xl font-bold text-slate-900 mb-2">Lists</Text>
        <Text className="text-slate-500 mb-8">
          Saved prompts, templates, and content ideas.
        </Text>

        <View className="flex-1 items-center justify-center opacity-50">
          <Ionicons name="document-text-outline" size={64} color="#cbd5e1" />
          <Text className="text-slate-400 mt-4 text-center font-medium">
            No lists created yet.
            {"\n"}
            Saved items will appear here.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
