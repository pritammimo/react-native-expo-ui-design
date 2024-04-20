import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, useFocusEffect, useRouter } from 'expo-router';
export default function tabsindex() {
    const router = useRouter();
    useFocusEffect(() => {
        // Call the replace method to redirect to a new route without adding to the history.
        // We do this in a useFocusEffect to ensure the redirect happens every time the screen
        // is focused.
        router.replace('/(auth)/signin');
      });
  return (
    <View>
      <Text>tabsindex</Text>
    </View>
  )
}

const styles = StyleSheet.create({})