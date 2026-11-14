import Button from '../components/Button';

export default function Home() {
    const handleCreate=(e) => {
        console.log('create button pressed');
    }

    const handleJoin=(e) => {
        console.log('join button pressed');
    }

    const handleInstructions=(e) => {
        console.log('instructions button pressed');
    }

    return (
        <div>
            <Button
                label={'Create game'}
                type={'button'}
                onClickHandler={handleCreate}
                className={''}
            />
            <Button
                label={'Join game'}
                type={'button'}
                onClickHandler={handleJoin}
            />
            <br/>
             <Button
                label={'Instructions'}
                type={'button'}
                onClickHandler={handleInstructions}
                className={''}
            />
        </div>
    );
}
