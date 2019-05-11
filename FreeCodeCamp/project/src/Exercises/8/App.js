import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.cond = this.cond.bind(this)
    }

    cond(){
        this.setState(prevState => {
            return {
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.cond}>
                    {(this.state.isLoggedIn ? "Logout" : "Login")}
                </button>
            </div>
        )
    }
}

export default App