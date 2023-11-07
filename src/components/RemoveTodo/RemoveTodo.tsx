import React from 'react'
import './removeTodo.css';

interface RemoveTodoProps {
    removeTodo: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RemoveTodo: React.FC<RemoveTodoProps> = ({ removeTodo }) => {
    const onRemoveItem = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        removeTodo(evt)
    }
    return (
        <button onClick={onRemoveItem} className='btn-remove'>Remove</button>
    )
}

export default RemoveTodo;