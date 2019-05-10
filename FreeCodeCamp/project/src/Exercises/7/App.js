import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.hasClick = this.hasClick.bind(this)
    }

    hasClick(){
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        }
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.hasClick}>Change</button>
            </div>
        )
    }
}

export default App