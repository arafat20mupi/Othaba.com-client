import { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import { AuthContext } from '../../client-side/src/AuthProvider/AuthProvider';
import UserList from './UserList';
import Message from './Massage';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);
    const { user } = useContext(AuthContext);
    const messagesEndRef = useRef(null); // Ref for scrolling to the end of messages

    // Fetch users from the backend
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Fetch messages for the selected user
    const fetchMessages = async () => {
        if (!selectedUser) return;

        try {
            const response = await axios.get(`http://localhost:5000/api/messages/${user.email}/${selectedUser}`);
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [selectedUser]); // Fetch messages whenever the selected user changes

    useEffect(() => {
        // Scroll to the latest message
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!newMessage.trim() || !selectedUser) return;

        const message = {
            sender: user.email,
            receiver: selectedUser,
            message: newMessage,
        };

        try {
            await axios.post('http://localhost:5000/api/messages', message);
            setNewMessage('');
            fetchMessages(); // Refresh the message list
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="grid grid-cols-3 justify-between bg-slate-50 h-full">
            <UserList users={users} onSelectUser={setSelectedUser} />
            <div className="messages overflow-y-auto h-full p-2"> 
                {messages.length === 0 ? (
                    <p>No messages found. Start chatting!</p>
                ) : (
                    messages.map((msg, index) => (
                        <Message key={index} message={msg} />
                    ))
                )}
                <div ref={messagesEndRef} /> {/* Scroll to this div */}
            </div>
            <div className='flex'>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="border input p-2 w-full" 
                />
                <button onClick={handleSendMessage} className="ml-2 btn bg-blue-500 text-white p-2 rounded">Send</button>
            </div>
        </div>
    );
};

export default Chat;
