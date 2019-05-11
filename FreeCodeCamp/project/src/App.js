import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: ""
        }
    }
    render(){
        return(
            <form>
                <input type="text" placeholder="asdas"></input>
            </form>
        )
    }
}

export default App