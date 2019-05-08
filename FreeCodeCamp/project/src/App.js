import React from "react"
import Joke from "./Joke"
import jokesData from "./JokesData"

const App = () => {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} joke={joke.joke}/>)
    return(
        <div>
            {jokeComponents}
        </div>
    )
}


/*
function App(){
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} joke={joke.joke}/>)
    return(
        <div>
            {jokeComponents}
        </div>
    )
}
*/

export default App