import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: ""
        }
    }

    handleChange(){
        this.setState({
            
        })
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