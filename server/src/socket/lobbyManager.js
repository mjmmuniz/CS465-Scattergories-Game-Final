// listens for network triggers from clients
// calls roomManager.js methods to update the state
// sends responses back over the network

const roomManager = require('../state/roomManager');

module.exports = function manageLobby(io, socket) {
    socket.on('create_room', ({ username } = {}) => {
        const room = roomManager.createRoom(socket.id, username);
        socket.join(room.code);

        socket.emit('room_joined', {
            roomCode: room.code,
            room
        });
        io.to(room.code).emit('room_updated', room);
    });
};