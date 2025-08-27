// app/(tabs)/profile.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  scrollView: {
    padding: 16,
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    marginTop: 24,
    borderWidth: 3,
    borderColor: '#A020F0',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userLocation: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 4,
  },

  statusCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  statusSafe: {
    backgroundColor: 'rgba(46, 204, 113, 0.2)', 
    borderWidth: 1,
    borderColor: '#2ecc71',
  },
  statusHelp: {
    backgroundColor: 'rgba(231, 76, 60, 0.2)', 
    borderWidth: 1,
    borderColor: '#e74c3c', 
  },
  statusTitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusTextSafe: {
    color: '#2ecc71',
  },
  statusTextHelp: {
    color: '#e74c3c',
  },
  // --- Info Section ---
  infoCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  lastInfoRow: {
    borderBottomWidth: 0, 
  },
  infoLabel: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  infoValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    maxWidth: '60%', 
    textAlign: 'right',
  },
});