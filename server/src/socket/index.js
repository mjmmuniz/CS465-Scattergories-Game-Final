const lobbyHandler = require('./lobbyManager');

module.exports = function useSocketHandlers(io) {
    io.on('connection', (socket) => {
        console.log('client connected: ', socket.id);
        //lobbyHandler(io, socket);

        socket.on('disconnect', () => {
            console.log('client disconnected: ', socket.id);
        });
    });
};
