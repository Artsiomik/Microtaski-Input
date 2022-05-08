import React, {useState} from 'react';
import './App.css';
// import {FullInput} from './Components/Fullinput';
import {Input} from './Components/Input';
import {Button} from './Components/Button';

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                }
            )
            }
        </div>
    );
}

export default App;
