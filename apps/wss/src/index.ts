import WebSocket, { WebSocketServer } from 'ws';
import { client } from '@repo/db/client';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (socket: WebSocket) => {
    client.user.create({
        data: {
            username: Math.random().toString(36).substring(2, 15),
            password: Math.random().toString(36).substring(2, 15)
        }
    })

    socket.send("yo yo websocket is working")
})

