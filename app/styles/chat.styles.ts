import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
messageList: {
  flex: 1,
  paddingHorizontal: 30,
  paddingTop: 10,
},

  messageRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  myMessageRow: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },

  messageContent: {
    flexShrink: 1, 
    maxWidth: '85%', 
  },
  myMessageContent: {
    alignItems: 'flex-end', 
  },
  theirMessageContent: {
    alignItems: 'flex-start', 
  },

  messageBubble: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  theirMessageBubble: {
    backgroundColor: '#E5E5EA',
    borderBottomLeftRadius: 5,
  },
  myMessageBubble: {
    backgroundColor: '#A020F0',
    borderBottomRightRadius: 5,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  myMessageText: {
    color: '#FFFFFF',
  },
  theirMessageText: {
    color: '#000000',
  },
  timestamp: {
    fontSize: 11,
    color: '#8A8A8E',
    marginTop: 4,
  },
  inputContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    backgroundColor: '#FAFAFA',
  },
  quickRepliesContainer: {
    marginBottom: 8,
  },
  quickReply: {
    backgroundColor: '#E5E5EA',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickReplyText: {
    fontSize: 14,
    color: '#000000',
  },
  mainInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#E5E5EA',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A020F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});