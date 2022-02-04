import React, {useState, useEffect} from "react";
import io from 'socket.io-client';

// components

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        socket.on('Welcome', data => console.log(data));
        return () => socket.disconnect(true);
    }, [])

    return <div>Chat Component</div>;
};

export default Chat;
