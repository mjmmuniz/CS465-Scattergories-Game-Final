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
            
        do {
            code = Math.floor(Math.random() * (MAX_CODE - MIN_CODE + 1)) + MIN_CODE;
            attempts += 1;
        } while (this.rooms.has(code) && attempts < 25);

        return code;
    }

    createRoom(hostSocketId, username) {
        const code = this.createCode();
        
        const room
    }
}
