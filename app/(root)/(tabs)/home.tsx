import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock Data
const MOCK_POSTS = [
  {
    id: "1",
    title: "Launching our new feature next week!",
    date: "2 hours ago",
    thumbnail: null,
  },
  {
    id: "2",
    title: "Great team meeting today. Big things coming.",
    date: "1 day ago",
    thumbnail: null,
  },
  {
    id: "3",
    title: "Reflecting on Q1 goals.",
    date: "3 days ago",
    thumbnail: null,
  },
  {
    id: "4",
    title: "Join our webinar on Friday.",
    date: "1 week ago",
    thumbnail: null,
  },
];

const PostCard = ({ item }: { item: (typeof MOCK_POSTS)[0] }) => (
  <View className="bg-white p-4 rounded-xl shadow-sm mb-4 mx-2 flex-1 border border-slate-100">
    <View className="h-32 bg-slate-100 rounded-lg mb-3 items-center justify-center">
      {/* Thumbnail placeholder */}
      <Ionicons name="image-outline" size={32} color="#94a3b8" />
    </View>

    <Text className="font-semibold text-slate-800 mb-1 line-clamp-2">
      {item.title}
    </Text>
    <Text className="text-xs text-slate-400 mb-3">{item.date}</Text>

    <View className="flex-row justify-end space-x-3 border-t border-slate-50 pt-2">
      {/* TODO: Integrate Meta/LinkedIn API */}
      <TouchableOpacity>
        <FontAwesome name="facebook-square" size={20} color="#cbd5e1" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="instagram" size={20} color="#cbd5e1" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="linkedin-square" size={20} color="#cbd5e1" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />
      <ScrollView className="flex-1 px-4 pt-2">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6 mt-2">
          <View className="flex-row items-center space-x-3">
            <View className="w-12 h-12 bg-slate-200 rounded-full items-center justify-center overflow-hidden">
              <Image
                source={require("../../../assets/images/avatar.png")}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
            <View className="ml-2">
              <Text className="text-lg font-bold text-slate-900">
                Amer Hamad
              </Text>
              <Text className="text-sm text-slate-500">Fist Bump</Text>
            </View>
          </View>
          <TouchableOpacity className="p-2 bg-white rounded-full border border-slate-200 shadow-sm">
            <Ionicons name="notifications-outline" size={24} color="#334155" />
          </TouchableOpacity>
        </View>

        {/* Create Post CTA */}
        <View className="mb-8">
          {/* TODO: Connect to OpenAI API */}
          <TouchableOpacity
            className="bg-[#22743d] p-4 rounded-xl flex-row items-center justify-center shadow-md active:bg-[#22743d]"
            onPress={() => router.push("/create-post")}
          >
            <Ionicons
              name="sparkles"
              size={20}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white font-bold text-lg">
              Create New Post
            </Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid Title */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-slate-900">Recent Posts</Text>
          <TouchableOpacity>
            <Text className="text-[#22743d] font-medium">See all</Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        {/* Note: Using a mapped View for simplicity in ScrollView instead of nested FlatList for this demo layout */}
        <View className="flex-row flex-wrap -mx-2">
          {MOCK_POSTS.map((post) => (
            <View key={post.id} className="w-1/2 px-0">
              <PostCard item={post} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
