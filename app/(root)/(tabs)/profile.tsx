import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingItem = ({ icon, title, subtitle, hasToggle = false }: any) => (
  <View className="flex-row items-center justify-between bg-white p-4 rounded-xl border border-slate-100 mb-3">
    <View className="flex-row items-center space-x-3">
      <View className="w-10 h-10 bg-slate-50 rounded-full mr-2 items-center justify-center">
        {icon}
      </View>
      <View>
        <Text className="text-slate-900 font-semibold">{title}</Text>
        {subtitle && <Text className="text-xs text-slate-500">{subtitle}</Text>}
      </View>
    </View>
    {hasToggle ? (
      <Switch />
    ) : (
      <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
    )}
  </View>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />
      <ScrollView className="flex-1">
        <View className="items-center py-8 bg-white border-b border-slate-100 mb-6">
          <View className="w-24 h-24 bg-slate-200 rounded-full mb-4 items-center justify-center">
            <Image
              source={require("../../../assets/images/avatar.png")}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-2xl font-bold text-slate-900">Amer Hamad</Text>
          <Text className="text-slate-500 mt-2 mb-2">Software Engineer</Text>
          <Text className="text-slate-500">
            Fist Bump • amer@getfistbumps.com
          </Text>
        </View>

        <View className="px-4">
          <Text className="text-sm font-bold text-slate-400 uppercase mb-3 ml-1">
            Integrations
          </Text>

          {/* TODO: Meta / LinkedIn Integrations */}
          <SettingItem
            icon={
              <FontAwesome name="linkedin-square" size={24} color="#0077b5" />
            }
            title="LinkedIn"
            subtitle="Connected as Amer Hamad"
            hasToggle={true}
          />
          <SettingItem
            icon={
              <FontAwesome name="facebook-square" size={24} color="#1877f2" />
            }
            title="Facebook"
            subtitle="Not connected"
          />
          <SettingItem
            icon={<FontAwesome name="instagram" size={24} color="#E1306C" />}
            title="Instagram"
            subtitle="Not connected"
          />

          <Text className="text-sm font-bold text-slate-400 uppercase mb-3 ml-1 mt-6">
            AI Settings
          </Text>

          {/* TODO: OpenAI Settings */}
          <SettingItem
            icon={<Ionicons name="sparkles" size={24} color="#6366f1" />}
            title="OpenAI Configuration"
            subtitle="Model: GPT-4"
          />

          <Text className="text-sm font-bold text-slate-400 uppercase mb-3 ml-1 mt-6">
            Account
          </Text>
          <SettingItem
            icon={<Ionicons name="people" size={24} color="#64748b" />}
            title="Social Connections"
          />
          <TouchableOpacity className="flex-row items-center justify-center p-4 mt-4 bg-red-50 rounded-xl">
            <Text className="text-red-600 font-semibold">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
