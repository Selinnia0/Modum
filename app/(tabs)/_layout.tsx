import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF00FF', // Purple/Pink active
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#4A00E0', // Deep purple
          borderTopWidth: 0,
          position: 'absolute',
          height: 80,
          paddingBottom: 25,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="safety"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="shield-checkmark" color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="comment-alert" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubble" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <View style={styles.logoTabCont}>
              <Ionicons size={20} name="leaf" color="white" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logoTabCont: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
