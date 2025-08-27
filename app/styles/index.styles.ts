import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', 
  },

  headerContainer: {
    padding: 16,
    paddingTop: 35, 
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  sosButton: {
    backgroundColor: '#e74c3c', 
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sosButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  map: {
    flex: 1, 
  },
  markerContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    padding: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  markerImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    backgroundColor: '#121212', 
  },
  actionButton: {
    flex: 1, 
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeButton: {
    backgroundColor: '#2ecc71', 
    marginRight: 8, 
  },
  helpButton: {
    backgroundColor: '#e74c3c', 
    marginLeft: 8, 
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});