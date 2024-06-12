import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

function TodoDetail() {
    const {id} = useParams()

    useEffect(()=>{
         if (id) {
            fetch(`https://dummyjson.com/todos/${id}`)
        .then(res => res.json())
        .then(
            (todojson)=>{
            setTodo(todojson)
        });

        return;
        }
    },[])
    const [todo,setTodo] = useState()
  return (
    <div>
      {id && todo ?(<div>{todo.id} - {todo.todo} </div>):(<div>Loading...</div>)}
    </div>
  )
}

export default TodoDetail
