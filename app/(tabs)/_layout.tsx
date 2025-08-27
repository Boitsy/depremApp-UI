import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color="#A0A0A0"  />,
        }}
      />
      <Tabs.Screen
        name="profile" 
        options={{
          title: 'Profile', 
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
          <Tabs.Screen
      name="messages"
      options={{
        title: 'Messages',
        tabBarIcon: ({ color, focused }) => ( 
          <TabBarIcon 
            name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
            color="#A0A0A0" 
          />
        ),
      }}
    />
    </Tabs>
  );
}
