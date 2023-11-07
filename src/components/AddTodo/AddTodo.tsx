import React from 'react'
import './AddTodo.css';
import Todos from '../../types/Todos';


interface AddTodoProps {
    addTodoList: (newTodo: Todos) => void;
    todo: Todos[];
}

type initialStateType = {
    id: null,
    title: string,
    done: boolean,
}

const AddTodo: React.FC<AddTodoProps> = ({addTodoList, todo}) => {
    const initialState: initialStateType = {
        id: null,
        title: '',
        done: false,
    }

    const [newTodo, setNewTodo] = React.useState(initialState)

    const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewTodo({
            ...newTodo,
            title: '',
        })
        const {title , done} = newTodo
        if(title === '') {
            console.log('Oops your input tabele is empty :(')
        }else {
           addTodoList({
                id: todo.length + 1,
                title,
                done,
            }); 
        }
    };
    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({
            ...newTodo,
            title: e.target.value
        })
    }

    return (
        <form onSubmit={onSubmitTodo} className='add-todo-form'>
            <input 
                type='text' 
                value={newTodo.title} 
                placeholder='todo name' 
                onChange={onChangeInputValue}
            />
            <button>Submit</button>
        </form>
    )
}

export default AddTodo;