const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('running');
});

io.on('connection', (socket) => {
    console.log(socket.id);
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`server running on http://127.0.0.1:${PORT}`);
});
