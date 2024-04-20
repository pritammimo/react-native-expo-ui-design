import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    >
        <Stack.Screen 
        name="index"
        options={{
            title: 'index',
            headerShown: false,
        }}
         />
        <Stack.Screen 
        name="signin"
        options={{
            title: 'Signin',
            headerShown: false,
        }}
         />
         <Stack.Screen 
        name="signup"
        options={{
            title: 'Signup',
            headerShown: false,
        }}
         />
    </Stack>
  );
}
