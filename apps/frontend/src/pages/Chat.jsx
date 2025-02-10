import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Peer from "peerjs";

const socket = io("http://localhost:5000");

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const myVideo = useRef(null);
    const peer = useRef(new Peer());

    useEffect(() => {
        socket.on("receiveMessage", (msg) => setMessages((prev) => [...prev, msg]));
    }, []);

    const sendMessage = () => {
        socket.emit("sendMessage", message);
        setMessage("");
    };

    // ✅ Video call setup
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            if (myVideo.current) myVideo.current.srcObject = stream;
        });

        peer.current.on("call", (call) => {
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                call.answer(stream);
            });
        });
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Chat & Video</h2>
            {/* ✅ Chat Section */}
            <div className="mt-4">
                {messages.map((msg, i) => (
                    <p key={i}>{msg}</p>
                ))}
            </div>
            <input
                className="border p-2 mt-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white" onClick={sendMessage}>
                Send
            </button>

            {/* ✅ Video Section */}
            <h3 className="text-lg font-semibold mt-6">Video Call</h3>
            <video ref={myVideo} autoPlay className="mt-4 border" width="300" />
        </div>
    );
};

export default Chat;