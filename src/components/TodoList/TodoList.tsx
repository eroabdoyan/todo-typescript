import React from 'react'
import './style.css';
import AddTodo from '../AddTodo/AddTodo';
import Todos from '../../types/Todos';
import RemoveTodo from '../RemoveTodo/RemoveTodo';
import Checkbox from '../CheckBox/Checkbox';
import EditTitle from '../EditTitle/EditTitle';

const TodoList: React.FC = () => {
    const [todo, setTodo] = React.useState<Todos[]>([])
    const [activeEdit, setActiveEdit] = React.useState<boolean>(false);
    const [changeTitleValue, setChangeTitleValue] = React.useState<string>('');
    const [currentId, setCurrentId] = React.useState<number | null>(null);
    
    
    const addTodoList = (newTodo: Todos) => {
        setTodo([...todo, newTodo]);
    }
    const removeTodo = (id: number) => {
        const filteredTodo: Todos[] = todo.filter(t => t.id !== id);
        setTodo(filteredTodo);
    }
    const onClickComplete = (id: number) => {
        const updatedTodoDone = todo.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done
                };
            }
            return item;
        });
        setTodo(updatedTodoDone);
    };
    const onEditTitle = (title: string) => {
        const updatedTodoTitle = todo.map(item => {
            if(item.id === currentId){
                return {...item, title: title}
            }
            return item;
            
        })
        setActiveEdit(!activeEdit)
        setChangeTitleValue('') 

        if(changeTitleValue) {
           setTodo(updatedTodoTitle);
        }
    };
    const onActiveEdit = (id: number) => {
        setActiveEdit(!activeEdit)
        setCurrentId(id)
    };
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setChangeTitleValue(evt.target.value)
    };

    return (
        <div className='wrap'>
            <AddTodo 
                addTodoList={addTodoList}
                todo={todo}
            />
            <ul className='todo'>
                {todo.map((item, i) => (
                    <div key={i}  className='todo-list'>
                        <li>
                            <div className='checkbox-btn'>
                                <Checkbox 
                                    onClickComplete={() => onClickComplete(item.id)} 
                                    isDone={item.done}
                                />
                            </div>
                            {item.title}
                        </li>
                        {item.id === currentId && activeEdit === true 
                        ? <div className='active-edit'>
                            <input type='text' value={changeTitleValue} onChange={handleChange}/>
                            <button className='save-btn' onClick={() => onEditTitle(changeTitleValue)}>Save</button>
                        </div> 
                        : <div onClick={() => onActiveEdit(item.id)} className='todo-btns'>
                            <EditTitle onEditTitle={() => onEditTitle(item.title)}/>
                            <RemoveTodo removeTodo={() => removeTodo(item.id)}/>
                        </div>
                        }
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;