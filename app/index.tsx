import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Implement real authentication
    router.replace('/(root)/(tabs)/home');
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login for ${provider}
    console.log(`Login with ${provider}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 justify-center items-center">
      <StatusBar style="dark" />
      <View className="w-full max-w-md px-8">
        
        <View className="mb-10 items-center">
          <Text className="text-3xl font-bold text-slate-900">Welcome Back</Text>
          <Text className="text-slate-500 mt-2">Sign in to continue to Fistbump</Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="text-slate-700 font-medium mb-1">Username</Text>
            <TextInput 
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500"
              placeholder="Enter your username"
              placeholderTextColor="#94a3b8"
              autoCapitalize="none"
            />
          </View>
          
          <View>
            <Text className="text-slate-700 font-medium mb-1">Password</Text>
            <TextInput 
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500"
              placeholder="Enter your password"
              placeholderTextColor="#94a3b8"
              secureTextEntry
            />
          </View>

          <TouchableOpacity className="items-end">
            <Text className="text-blue-600 font-medium">Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleLogin}
            className="w-full bg-slate-900 py-4 rounded-xl items-center mt-4 shadow-sm"
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center my-8">
          <View className="flex-1 h-[1px] bg-slate-200" />
          <Text className="mx-4 text-slate-400">Or continue with</Text>
          <View className="flex-1 h-[1px] bg-slate-200" />
        </View>

        <View className="space-y-3">
          <TouchableOpacity 
            onPress={() => handleSocialLogin('Google')}
            className="w-full bg-white border border-slate-200 py-3 rounded-xl items-center flex-row justify-center space-x-2"
          >
            {/* Placeholder for Google Icon */}
            <Text className="text-slate-700 font-semibold">Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => handleSocialLogin('LinkedIn')}
            className="w-full bg-white border border-slate-200 py-3 rounded-xl items-center flex-row justify-center space-x-2"
          >
            {/* Placeholder for LinkedIn Icon */}
            <Text className="text-slate-700 font-semibold">Continue with LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

