import React, { useState ,useEffect} from 'react'

function Login() {
    const [username,setUsername]= useState()
    const [password,setPassword]= useState()
    const [user,setUser] = useState()
    const [isLoggedin,setIsLoggedIn] = useState(false)

    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MTc3MjY5OTcsImV4cCI6MTcxNzczMDU5N30.nmjH6qbTz--8aDryn7xh1KLFg9iylF7d0n6bCnfrdg0"
    useEffect(()=>{

        const token = localStorage.getItem('token')


    if(token){

        fetch('https://dummyjson.com/user/me',{
            method:"GET",
            headers:{
                'Authorization':`Bearer ${token}` 
            }
        }).then((res)=>{
            if (res.status != 200){
                throw new Error("AUTH FAILED")
            }

            return res.json()
        }).then((resjson)=>{
            // 
            console.log(resjson)
            setUser(resjson)
            setIsLoggedIn(true)
        }).catch((error)=>{
            console.log(error)
        })

    }
    else{
        setIsLoggedIn(false)

    }


    },[])


  return (
    <div className='w-full bg-gray-300 mx-auto flex space-around'>


        {user && (
            <div className='flex justify-between items-center w-full'>
            <div className='flex'>
            <img src={user.image} className='w-12 h-12' alt={user.username} />

            <p className='text-xl font-bold'>Welcome {user.username} ({user.firstName} {user.lastName})</p>
            
            </div>
            <button className='py-2 px-4 rounded-xl bg-red-500 text-white shadow-xl hover:bg-red-600 hover:shadow-inner'  style={{backgroundColor:"red",color:"white"}} onClick={()=>{
                localStorage.removeItem('token')
                setIsLoggedIn(false)
                setUser(null)
            }}>LOGOUT</button>
            </div>

        )}
      
      {!isLoggedin && (
        <div>
             LOGIN
        <form onSubmit={(e)=>{
          e.preventDefault()
          // console.log(username,password)
          fetch('https://dummyjson.com/user/login',{
              method:"POST",
              headers:{
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                  username:username,
                  password:password
              })
          }).then((res)=>{
             return res.json()
          }).then((resjson)=>{
              console.log(resjson)
              setUser(resjson)
              console.log(resjson.token)
              localStorage.setItem('token',resjson.token)
              setIsLoggedIn(true)
  
          })
  
        }}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" onChange={(e)=>{
              setUsername(e.target.value)
          }}  />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name='password' onChange={(e)=>{
              setPassword(e.target.value)
          }}  />
          <button type="submit">Login</button>
        </form>
        </div>
      )}
     
    </div>
  )
}

export default Login
