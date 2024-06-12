import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game.jsx'



function App(props) {

  // let count = 0;
  const [count,setCount] = useState(0)
 

  const mero_data = "THIS IS FUN    "
  // const mero_games = ['BASKETBALL','FOOTBALL','VOLLEYBALL','BASEBALL']
  const mero_games = [{
    name: 'BASKETBALL',
    id: 1,
    special:true,
  },
  {
    name: 'VOLLEYBALL',
    id: 2,
    special:false,
  },

  {
    name: 'BASEBALL',
    id: 3,
    special:true,
  },
]
  return (
    <>
    
      {/* <ul>
        {mero_games.map((game,index)=>{
          return <li key={index}>{game}
          </li>
        })}
      </ul> */}


      <button onClick={
        ()=>{
        setCount(count + 1)
        console.log(count)
        console.log('hello btn clicked')
      }}   disabled={count>=10} >INCREASE COUNT {count} </button>

  <button onClick={
        ()=>{
        setCount(count - 1)
        console.log(count)
        console.log('hello btn clicked')
      }}   disabled={count<=0} >DECREASE COUNT {count} </button>

      <div className="gamelist">
        {mero_games.map((game,index)=>{
          return <Game  key={index} game={game} />
        })}
      </div>

      <p style={{
        color:'red',
        backgroundColor:"cyan",
        fontSize:"30px",
        padding:"10px"

      }}>
        { props.title?props.title:"TITLE NOT AVAILABLE" }

    </p>
     <div  className="mydiv">
     {props.tagline}
   </div>
    </>
  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
