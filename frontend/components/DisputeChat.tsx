'use client';

import { useState, useEffect } from 'react';
import { useEscrowContext } from '../context/EscrowContext';
import { fetchDisputeLogs, initiateDispute, Message } from '../lib/massa';

const DisputeChat: React.FC<{ escrowId: string }> = ({ escrowId }) => {
  const { client, account } = useEscrowContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!client) return;
      try {
        setLoading(true);
        const disputeLogs = await fetchDisputeLogs(client, escrowId);
        setMessages(disputeLogs);
      } catch (error) {
        console.error('Failed to fetch dispute logs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [client, escrowId]);

  const handleSend = async () => {
    if (!newMessage.trim() || !client || !account) return;
    try {
      await initiateDispute(client, escrowId, newMessage);
      setMessages([...messages, { sender: 'You', content: newMessage, timestamp: Math.floor(Date.now() / 1000) }]);
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send dispute message:', error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dispute Chat</h2>
      <div className="h-64 overflow-y-auto mb-4 p-4 bg-white rounded">
        {loading ? (
          <p>Loading...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 chat-message ${msg.sender === 'You' ? 'chat-message-you' : 'chat-message-other'}`}
            >
              <p className="font-semibold">{msg.sender}</p>
              <p>{msg.content}</p>
              <p className="text-xs text-gray-500">
                {new Date(msg.timestamp * 1000).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Type your message..."
          disabled={!client || !account}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 disabled:bg-gray-400"
          disabled={!client || !account || !newMessage.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DisputeChat;