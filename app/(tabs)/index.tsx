import React from 'react';
import { View, Text, Pressable, SafeAreaView, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // delete this along with its corresponding lines to be able to view it online
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../styles/index.styles'; 

const DUMMY_CONTACTS_ON_MAP = [
  { id: '1', userName: 'Friend 1', avatarUrl: 'https://picsum.photos/id/1011/200', latitude: 37.78825, longitude: -122.4324 },
  { id: '2', userName: 'Family Member', avatarUrl: 'https://picsum.photos/id/1025/200', latitude: 37.76825, longitude: -122.4024 },
];

export default function HomeScreen() {
  const onSafePress = () => {
    Alert.alert("Status Update", "A message has been sent to your contacts letting them know you are safe.");
  };

  const onHelpPress = () => {
    Alert.alert("Emergency Alert!", "Your location and a request for help have been sent to your emergency contacts.");
  };

    const onSOSPress = () => {
    Alert.alert("Emergency?", "I do not what this button should do ");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.sosButton} onPress={onSOSPress}>
          <Ionicons name="warning" size={20} color="white" />
          <Text style={styles.sosButtonText}>SOS</Text>
        </Pressable>
      </View>

      {/* delete from here to*/}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

        {DUMMY_CONTACTS_ON_MAP.map((contact) => (
          <Marker
            key={contact.id}
            coordinate={{
              latitude: contact.latitude,
              longitude: contact.longitude,
            }}
            title={contact.userName}
          >
            <View style={styles.markerContainer}>
              <Image
                source={{ uri: contact.avatarUrl }}
                style={styles.markerImage}
              />
            </View>
          </Marker>
        ))}
      </MapView>
{/*to here toview it online*/}

      <View style={styles.bottomContainer}>
        <Pressable style={[styles.actionButton, styles.safeButton]} onPress={onSafePress}>
          <Text style={styles.actionButtonText}>I'm Safe</Text>
        </Pressable>
        <Pressable style={[styles.actionButton, styles.helpButton]} onPress={onHelpPress}>
          <Text style={styles.actionButtonText}>I Need Help</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}