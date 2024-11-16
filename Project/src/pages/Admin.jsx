import React, { useEffect, useState } from 'react';
import { db, ref, onValue, update, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  // Fetch messages in real-time from Firebase Realtime Database
  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setMessages(messagesArray);
    });
  }, []);

  // Handle response input for each message
  const handleResponseChange = (messageId, text) => {
    setResponse((prev) => ({
      ...prev,
      [messageId]: text,
    }));
  };

  // Send response and update Realtime Database
  const handleSendResponse = async (messageId) => {
    const responseText = response[messageId];

    try {
      const messageRef = ref(db, `messages/${messageId}`);
      await update(messageRef, {
        response: responseText,
        repliedAt: new Date().toISOString(),
      });

      alert('Response sent successfully!');
      setResponse((prev) => ({
        ...prev,
        [messageId]: '',
      }));
    } catch (error) {
      console.error('Error sending response:', error);
      alert('Failed to send response');
    }
  };

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gradient-to-br from-green-500 via-white to-green-200 text-gray-900 flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-6">Admin <span className="ml-12">Dashboard</span></h2>
        <nav>
          <ul className="space-y-4">
            <li className="hover:bg-green-400 p-2 rounded-lg cursor-pointer text-center md:text-left">
              Messages
            </li>
            <li className="hover:bg-green-400 p-2 rounded-lg cursor-pointer text-center md:text-left" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="h-[80px] w-[90%] md:w-[500px] bg-slate-50 text-center rounded-2xl shadow-xl border-2 border-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-indigo-500/50 transform hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-black text-3xl md:text-5xl font-extrabold gradient-judul tracking-wide">Messages</h1>
        </div>
        
        <div className="flex flex-col-reverse gap-6 mt-16">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full">
              <h2 className="text-xl font-semibold text-black">Pesan user :</h2>
              <p className="text-gray-700 mb-4 break-words mt-2">{msg.message}</p>
              {msg.tanggal && (
                <p className="text-gray-500 text-xs">
                  Dikirim tanggal : {new Date(msg.tanggal).toLocaleString()}
                </p>
              )}

              {msg.response ? (
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                  <h3 className="text-md font-semibold text-green-600">Jawaban Adminaaa :</h3>
                  <p className="text-gray-800 break-words">{msg.response}</p>
                </div>
              ) : (
                <div>
                  <textarea
                    value={response[msg.id] || ''}
                    onChange={(e) => handleResponseChange(msg.id, e.target.value)}
                    placeholder="Enter your response"
                    className="w-full p-3 mt-4 border border-gray-300 rounded-lg"
                    rows="3"
                  />
                  <button
                    onClick={() => handleSendResponse(msg.id)}
                    className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 w-full md:w-auto"
                  >
                    Kirim Jawaban
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;
