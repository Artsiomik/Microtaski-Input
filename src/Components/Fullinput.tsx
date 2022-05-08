import React, {ChangeEvent, MouseEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value);

    }
    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.addMessage(title);
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}