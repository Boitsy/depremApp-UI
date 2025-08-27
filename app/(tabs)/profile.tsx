import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { styles } from '../styles/profile.styles';

const userProfile = {
  name: 'Derin',
  surname: 'Atac',
  profilePictureUrl: 'https://picsum.photos/id/1005/200',
  location: 'Istanbul, Turkey',
  isSafe: true, 
  bloodType: 'A+',
  allergies: 'Peanuts, Penicillin',
  chronicMedications: 'Insulin, Ventolin',
  disabilityStatus: 'None',
};

export default function ProfileScreen() {
  const currentStatus = userProfile.isSafe 
    ? { text: "I'm OK", style: styles.statusSafe, textStyle: styles.statusTextSafe }
    : { text: "I Need Help", style: styles.statusHelp, textStyle: styles.statusTextHelp };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/*HEADER (PFP, Name, Location)*/}
        <View style={styles.header}>
          <Image source={{ uri: userProfile.profilePictureUrl }} style={styles.profileImage} />
          <Text style={styles.userName}>{`${userProfile.name} ${userProfile.surname}`}</Text>
          <Text style={styles.userLocation}>{userProfile.location}</Text>
        </View>

        {/*CURRENT SITUATION CARD*/}
        <View style={[styles.statusCard, currentStatus.style]}>
          <Text style={styles.statusTitle}>Current Situation</Text>
          <Text style={[styles.statusText, currentStatus.textStyle]}>{currentStatus.text}</Text>
        </View>

        {/*  VITAL INFORMATION CARD */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Blood Type</Text>
            <Text style={styles.infoValue}>{userProfile.bloodType}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Allergies</Text>
            <Text style={styles.infoValue}>{userProfile.allergies}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Maintenance medications</Text>
            <Text style={styles.infoValue}>{userProfile.chronicMedications}</Text>
          </View>
          <View style={[styles.infoRow, styles.lastInfoRow]}>
            <Text style={styles.infoLabel}>Disability status</Text>
            <Text style={styles.infoValue}>{userProfile.disabilityStatus}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}