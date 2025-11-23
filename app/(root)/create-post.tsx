import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock Team Data
const TEAM_MEMBERS = [
  { id: "1", name: "Sarah Wilson", role: "Marketing Lead" },
  { id: "2", name: "Mike Chen", role: "Content Creator" },
  { id: "3", name: "Jessica Taylor", role: "Social Media Manager" },
  { id: "4", name: "David Miller", role: "Designer" },
];

const SOCIAL_PLATFORMS = [
  {
    id: "facebook",
    name: "Facebook",
    icon: "facebook-square",
    color: "#1877F2",
  },
  { id: "instagram", name: "Instagram", icon: "instagram", color: "#E4405F" },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin-square",
    color: "#0A66C2",
  },
];

export default function CreatePostScreen() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [selectedMember, setSelectedMember] = useState<
    (typeof TEAM_MEMBERS)[0] | null
  >(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [attachment, setAttachment] = useState<"image" | "video" | null>(null);

  const togglePlatform = (id: string) => {
    if (selectedPlatforms.includes(id)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== id));
    } else {
      setSelectedPlatforms([...selectedPlatforms, id]);
    }
  };

  const handleShare = () => {
    // Placeholder logic for sharing
    console.log("Sharing to:", selectedPlatforms);
    console.log("Prompt:", prompt);
    console.log("Assignee:", selectedMember?.name);
    setIsShareModalOpen(false);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="px-4 py-3 flex-row items-center justify-between bg-white border-b border-slate-100">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-800">New Post</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* Prompt Input Section */}
        <View className="mb-6">
          <Text className="text-sm font-semibold text-slate-700 mb-2">
            What should this post be about?
          </Text>
          <View className="bg-white p-4 rounded-xl border border-slate-200 min-h-[160px]">
            <TextInput
              className="flex-1 text-slate-800 text-base leading-6"
              placeholder="e.g., Write a LinkedIn post about our new Q3 sustainability goals..."
              placeholderTextColor="#94a3b8"
              multiline
              textAlignVertical="top"
              value={prompt}
              onChangeText={setPrompt}
            />

            {/* Attachment Placeholder */}
            <View className="flex-row justify-end mt-4 pt-3 border-t border-slate-100">
              <TouchableOpacity
                className="flex-row items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-200"
                onPress={() => setAttachment("image")}
              >
                <Ionicons name="image-outline" size={20} color="#64748b" />
                <Text className="text-slate-600 ml-2 text-sm font-medium">
                  Attach Media
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Team Member Dropdown */}
        <View className="mb-8 z-10">
          <Text className="text-sm font-semibold text-slate-700 mb-2">
            Assign to Team Member
          </Text>
          <TouchableOpacity
            className="bg-white p-4 rounded-xl border border-slate-200 flex-row items-center justify-between"
            onPress={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedMember ? (
              <View className="flex-row items-center">
                <View className="w-8 h-8 bg-[#e0f2e9] rounded-full items-center justify-center mr-3">
                  <Text className="text-[#22743d] font-bold">
                    {selectedMember.name.charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text className="text-slate-800 font-medium">
                    {selectedMember.name}
                  </Text>
                  <Text className="text-xs text-slate-500">
                    {selectedMember.role}
                  </Text>
                </View>
              </View>
            ) : (
              <Text className="text-slate-400">Select a team member...</Text>
            )}
            <Ionicons
              name={isDropdownOpen ? "chevron-up" : "chevron-down"}
              size={20}
              color="#94a3b8"
            />
          </TouchableOpacity>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <View className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200 shadow-lg z-20 overflow-hidden">
              {TEAM_MEMBERS.map((member) => (
                <TouchableOpacity
                  key={member.id}
                  className="p-4 border-b border-slate-50 flex-row items-center active:bg-slate-50"
                  onPress={() => {
                    setSelectedMember(member);
                    setIsDropdownOpen(false);
                  }}
                >
                  <View className="w-8 h-8 bg-slate-100 rounded-full items-center justify-center mr-3">
                    <Text className="text-slate-500 font-medium">
                      {member.name.charAt(0)}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-slate-800 font-medium">
                      {member.name}
                    </Text>
                    <Text className="text-xs text-slate-500">
                      {member.role}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Footer Actions */}
      <View className="p-4 bg-white border-t border-slate-100">
        <TouchableOpacity
          className="bg-[#22743d] p-4 rounded-xl flex-row items-center justify-center shadow-sm"
          onPress={() => setIsShareModalOpen(true)}
        >
          <Text className="text-white font-bold text-lg mr-2">
            Review & Share
          </Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Share Modal */}
      <Modal
        visible={isShareModalOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsShareModalOpen(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 min-h-[400px]">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-bold text-slate-900">
                Where to post?
              </Text>
              <TouchableOpacity onPress={() => setIsShareModalOpen(false)}>
                <Ionicons name="close" size={24} color="#94a3b8" />
              </TouchableOpacity>
            </View>

            <Text className="text-slate-500 mb-6">
              Select all the platforms you want to publish this content to.
            </Text>

            <View className="space-y-4 mb-8">
              {SOCIAL_PLATFORMS.map((platform) => {
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <TouchableOpacity
                    key={platform.id}
                    className={`p-4 rounded-xl border-2 flex-row items-center justify-between ${isSelected ? "border-[#22743d] bg-[#f0fdf4]" : "border-slate-200 bg-white"}`}
                    onPress={() => togglePlatform(platform.id)}
                  >
                    <View className="flex-row items-center">
                      <FontAwesome
                        name={platform.icon as any}
                        size={24}
                        color={isSelected ? platform.color : "#94a3b8"}
                      />
                      <Text
                        className={`ml-3 font-semibold ${isSelected ? "text-slate-900" : "text-slate-500"}`}
                      >
                        {platform.name}
                      </Text>
                    </View>
                    {isSelected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color="#22743d"
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity
              className={`p-4 rounded-xl items-center justify-center ${selectedPlatforms.length > 0 ? "bg-[#22743d]" : "bg-slate-300"}`}
              disabled={selectedPlatforms.length === 0}
              onPress={handleShare}
            >
              <Text className="text-white font-bold text-lg">Post Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
