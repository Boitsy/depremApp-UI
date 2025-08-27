import React from 'react';
import { View, Text, FlatList, Pressable, Image, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../styles/messages.styles';

type Conversation = {
  id: string;
  userName: string;
  lastMessage: string;
  avatarUrl: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
   latitude: number;
  longitude: number;
};

export const DUMMY_DMS: Conversation[] = [
  { id: '1', userName: 'Annem', lastMessage: 'Güvendeyiz kızım', avatarUrl: 'https://picsum.photos/id/433/200', timestamp: '2min', unreadCount: 2, isOnline: true, latitude: 37.78825, longitude: -122.4324  },
  { id: '2', userName: 'Babam', lastMessage: 'Güvendeyiz.', avatarUrl: 'https://picsum.photos/id/1027/200', timestamp: '1min', unreadCount: 0, isOnline: false, latitude: 37.75825, longitude: -122.4624 },
  { id: '3', userName: 'Kardeşim', lastMessage: 'İyi misin?', avatarUrl: 'https://picsum.photos/id/338/200', timestamp: '50sec', unreadCount: 0, isOnline: false, latitude: 37.79825, longitude: -122.4124  },
  { id: '4', userName: 'Abim', lastMessage: 'İyi misiniz?', avatarUrl: 'https://picsum.photos/id/1005/200', timestamp: '3min', unreadCount: 1, isOnline: true, latitude: 37.76825, longitude: -122.4024 },
  { id: '5', userName: 'Mert', lastMessage: 'Kanka neredesiniz?', avatarUrl: 'https://picsum.photos/id/1011/200', timestamp: '10sec', unreadCount: 2, isOnline: true, latitude: 37.71825, longitude: -122.4824 },
];

export default function MessagesScreen() {
  const renderChatItem = ({ item }: { item: Conversation }) => (
<Link
  href={{
    pathname: "/chat/[id]",
    params: { id: item.id, userName: item.userName }
  }}
  asChild
>
      <Pressable style={styles.chatItem}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
          {item.isOnline && <View style={styles.onlineIndicator} />}
        </View>
        <View style={styles.chatInfo}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.tabButton}>
          <Text style={styles.activeTabText}>Message</Text>
        </Pressable>
        <Pressable style={styles.tabButton}>
          <Text style={styles.inactiveTabText}>Active</Text>
          <View style={styles.activeDot} />
        </Pressable>
      </View>

      <FlatList
        data={DUMMY_DMS}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
}