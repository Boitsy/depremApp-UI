import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 35,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#A020F0', 
  },
  inactiveTabText: {
    color: '#888888',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00FF00', 
    marginLeft: 8,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00FF00',
    borderWidth: 2,
    borderColor: '#1C1C1E',
  },
  chatInfo: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  lastMessage: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  timestamp: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: 8,
  },
  unreadBadge: {
    backgroundColor: '#A020F0',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});