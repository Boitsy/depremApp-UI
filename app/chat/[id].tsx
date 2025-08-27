import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { styles } from '../styles/chat.styles';

type Message = {
  id: string;
  sender: 'me' | 'them';
  text: string;
  timestamp: string;
  avatarUrl?: string;
};

const DUMMY_CHAT_INITIAL: Message[] = [
  { id: '1', sender: 'them', text: 'Güvendeyiz kızım', timestamp: 'Yesterday 11:44am', avatarUrl: 'https://picsum.photos/id/1025/200' },
  { id: '2', sender: 'me', text: 'Tekkers!', timestamp: '17:37' },
  { id: '3', sender: 'me', text: 'We got this!', timestamp: '17:37' },
  { id: '4', sender: 'them', text: 'This is a much longer received message to demonstrate how the text will wrap naturally to the next line when it exceeds the maximum width.', timestamp: '17:38', avatarUrl: 'https://picsum.photos/id/1025/200' },
  { id: '5', sender: 'me', text: 'And this is a very long sent message, just to make sure that the wrapping works perfectly on both sides of the conversation.', timestamp: '17:39' },
];

const DUMMY_QUICK_REPLIES = ['Sounds good!', 'On my way.', 'Thanks!'];

export default function ChatScreen() {
  const { id, userName: nameFromParams } = useLocalSearchParams<{ id: string, userName: string }>();
  const userName = nameFromParams || `Chat with User ${id}`;

  const [messages, setMessages] = useState(DUMMY_CHAT_INITIAL);
  const [quickReplies, setQuickReplies] = useState(DUMMY_QUICK_REPLIES);
  const [inputText, setInputText] = useState('');

  const handleSendQuickReply = (replyText: string) => {
    const newMessage: Message = { id: Date.now().toString(), sender: 'me', text: replyText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(currentMessages => [newMessage, ...currentMessages]);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    const newMessage: Message = { id: Date.now().toString(), sender: 'me', text: inputText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(currentMessages => [newMessage, ...currentMessages]);
    setInputText('');
  };


  const renderMessageItem = ({ item }: { item: Message }) => {
    const isMyMessage = item.sender === 'me';

    return (
      <View style={[styles.messageRow, isMyMessage && styles.myMessageRow]}>
        {!isMyMessage && <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />}
        
        <View style={[styles.messageContent, isMyMessage ? styles.myMessageContent : styles.theirMessageContent]}>
          <View style={[styles.messageBubble, isMyMessage ? styles.myMessageBubble : styles.theirMessageBubble]}>
            <Text style={[styles.messageText, isMyMessage ? styles.myMessageText : styles.theirMessageText]}>
              {item.text}
            </Text>
          </View>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: userName }} />
      <FlatList data={messages} renderItem={renderMessageItem} keyExtractor={(item) => item.id} style={styles.messageList} inverted />
      <View style={styles.inputContainer}>
        {quickReplies.length > 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickRepliesContainer}>
            {quickReplies.map((reply, index) => (
              <Pressable key={index} style={styles.quickReply} onPress={() => handleSendQuickReply(reply)}>
                <Text style={styles.quickReplyText}>{reply}</Text>
              </Pressable>
            ))}
          </ScrollView>
        )}
        <View style={styles.mainInputRow}>
          <TextInput placeholder="Send a message" style={styles.textInput} value={inputText} onChangeText={setInputText} />
          <Pressable style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}