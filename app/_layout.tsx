import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export const unstable_settings = {
    initialRouteName: "(auth)/signin", 
  };
export default function HomeLayout() {
  return (
<SafeAreaProvider>
    <Slot/>
</SafeAreaProvider>
  )
}
