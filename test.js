fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then((data)=>{

    // todos,setTodos
    // setTodos()
    console.log(data.todos)

});