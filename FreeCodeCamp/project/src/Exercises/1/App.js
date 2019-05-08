import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"

var x = 5
var y = 7

const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00"
}

//const App = () => <h1 style={styles}> Number {x} + {y} is equal to {x + y} </h1> //regulart javscript JSX syntax

const App = () => <h1 style={styles}>{`Number ${x} + ${y} is equal to ${x + y}`}</h1>



export default App