const express = require('express');
const http = require('http');
const socketio = require('socket.io')

const PORT = process.env.PORT || 5000
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

io.on('connection', (socket)=>{
    console.log('Connection success');
    socket.on('disconnect', ()=>{
        console.log('Disconnected');
    })
})

app.use(router);

server.listen(PORT, ()=> console.log(`Server has started on port ${PORT}`));