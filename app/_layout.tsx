import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "(auth)/signin", // <= important!
  
    // auth: { // <= important!
    //   initialRouteName: "Login", // <= important!
    // },
  };
export default function HomeLayout() {
  return (
<SafeAreaProvider>
    <Slot/>
</SafeAreaProvider>
  )
}
