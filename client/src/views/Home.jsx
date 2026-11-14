import { useState } from 'react';
import Button from '../components/Button';

export default function Home() {
    const [showInstructions, setShowInstructions] = useState(false);
    
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

    const handleCreate=(e) => {
        console.log('create button pressed');
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
