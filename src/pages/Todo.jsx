import { useEffect, useState } from "react"
import {useParams,Link} from 'react-router-dom'
function Todo(){
    const {id} = useParams()

    const [todos,setTodos] = useState([])
    const [todo,setTodo] = useState()

    useEffect(()=>{
        // if (id) {
        //     fetch(`https://dummyjson.com/todos/${id}`)
        // .then(res => res.json())
        // .then(
        //     (todojson)=>{
        //     setTodo(todojson)
        // });

        // return;
        // }
        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(
            (todojson)=>{
            setTodos(todojson.todos)
        });
        console.log("AFTER TODOS CALL",todos)
    },[  
    ])
    return (
        <div>
            <h1>TODO LIST</h1>
            <Link to="/add"> Add Todo </Link>
            <div>
                {todos.length>0?todos.map((todo)=>{

                    return (


                        <Link key={todo.id} to={`/todos/${todo.id}/`} >

                            <div>{todo.todo}-  {todo.id}</div>
                        </Link>
                    )
                }):"LOADING...."}
            </div>
        </div>
    )
}
export default Todo