import React from 'react';
import Video from '../Video/Video';
import io from "socket.io-client"

const socket = io.connect('http://localhost:5010');

const App = () => {
    var socket = io();
    return (
        <Video />
    );
}

export default App;