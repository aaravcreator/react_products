function Game({game}){
  
    console.log(game.name)
    // check if special game
    
    return (
      <div className={game.special? "game specialgame" : "game"} >
        <h1>{game.name}</h1>
        <p>##{game.id}</p>
      </div>
    )
  
  }
  export default Game