// manages rooms data structure

const MIN_CODE = 1000;
const MAX_CODE = 9999;

class roomManager {
    constructor() {
        this.rooms = new Map();
    }

    // generate and return the unique code for the game
    createCode() {
        let code = 0;       // code for game
        let attempts = 0;   // attempts to generate code
            
        // generate number between 1000-9999
        do {
            code = Math.floor(Math.random() * (MAX_CODE - MIN_CODE + 1)) + MIN_CODE;
            attempts += 1;
        } while (this.rooms.has(code) && attempts < 25);

        // stringify the number code
        code = String(code);
        return code;
    }
    
    // create and return room 
    createRoom(hostSocketId, username) {
        const code = this.createCode();
        const room = {
            code,
            hostId: hostSocketId,
            phase: 'lobby',
            letter: null,
            categories: [],
            players: [
                {
                    id: hostSocketId,
                    username: username,
                    isHost: true,
                    ready: true,
                    score: 0
                }
            ],
        }
        
        console.log(code);
        console.log("room created!");
        this.rooms.set(code, room);
        return room;
    }

    // return room if code exists, null otherwise
    joinRoom(code) {
        return (this.rooms.get(code) || null);
    }

    // add player and information to game
    addPlayer(code, socketId, username) {
        const room = this.joinRoom(code);
        // if room does not exist
        if (!room) {
            return { error: 'room not found' };
        }
        // if room already started game
        if (room.phase !== 'lobby') {
            return { error: 'game already started' };
        }

        // object for player information
        const player = {
            id: socketId,
            username: username,
            isHost: socketId === room.hostId,
            isReady: false,
            score: 0 
        };

        room.players.push(player);
        return {room, player};
    }

    // ready up to start game
    readyUp(code) {
        const room = this.joinRoom(code);
        
        //if room does not exist
        if (!room) {
            return { error : 'room not found' };
        }

        const player = room.players.find((p) => p.id === socketId);
        if (!player) {
            return { error: 'player not in room' };
        }

        player.isReady = !player.isReady;
        return {room, player};
    }
}

module.exports = new roomManager();
