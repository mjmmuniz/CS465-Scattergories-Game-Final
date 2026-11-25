import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { socket } from '../Socket';

export default function Home({ onRoomJoined }) {
    const [phase, setPhase] = useState(null);       // null = home, create = username, join = username + code
    const [username, setUsername] = useState('');
    const [joinCode, setJoinCode] = useState('');
    const [showInstructions, setShowInstructions] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    if (showInstructions) {
        return (
            <div>
                <h2>Instructions</h2>
                <p>... ... ...</p>
                <Button
                    label={'Back'}
                    type={'button'}
                    onClick={() => setShowInstructions(false)}
                    className={''}
                />
            </div>
        );
    }

    //create button is pressed
    const startCreate=(e) => {


    };
    //create info is gathered
    const handleCreate=(e) => {
        console.log('create button pressed');
        setPhase('create');
        setErrorMessage('');
        socket.emit('create_room', { username });
    };

    const handleJoin=(e) => {
        console.log('join button pressed');
    };

    return (
        <div>
        
            <Button
                label={'Create game'}
                type={'button'}
                onClick={handleCreate}
                className={''}
            />
            <Button
                label={'Join game'}
                type={'button'}
                onClick={handleJoin}
                className={''}
            />
            <br/>
             <Button
                label={'Instructions'}
                type={'button'}
                onClick={() => setShowInstructions(true)}
                className={''}
            />
        </div>
    );
}
