import React, { useState } from 'react'

function AddTodo() {

    const [todo,setTodo] = useState({
        'todo':'',
        'completed':false,
        'userId':1
    })


  return (
    <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault()
            fetch('https://dummyjson.com/todos/add',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
            }).then((res)=>res.json()).then((resjson)=>{
                console.log(resjson)
                setTodo({
                    'todo':'',
                    'completed':false,
                    'userId':1
                })
            })

        }}>
            {JSON.stringify(todo)}
            <label htmlFor="todo">TODO</label>
            <input type="text"  id="todo" onChange={(e)=>{
                console.log(e.target.value)
                setTodo({...todo,todo:e.target.value})

            }}/>

            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default AddTodo
