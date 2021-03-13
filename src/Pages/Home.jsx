import React ,{ useState } from 'react'
import TodoHeader from '../Components/TodoHeader';
import TodoList from '../Components/TodoList';
import TodoForm from '../Components/TodoForm';
import style from "./Todo.module.scss";
export default function Home() {
    const [tasks,setTasks]= useState([{
        id:Date.now(),
        isDone:false,
        body: '',
    }])
    const addTask=values=>{
        const newTask={
         body:values.addingTask,
         id:Date.now(),
         isDone:false,
        }
        setTasks([...tasks,newTask]);
    }
    const deleting=(id)=>{setTasks(tasks.filter(currentTask=>currentTask.id!==id))}
    return (
        <div className={style.flex}>
            <TodoHeader/>
            <TodoList tasks={tasks} delete={deleting}/>
            <TodoForm addTask={addTask} tasks={tasks}/>
        </div>
    )
}
