import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const{name, value, checked, type} = event.target
        event.target.type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render(){
        return(
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleChange}
                    name="firstName"
                />
                <br/>

                <input
                    type="text"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    name="lastName"
                />
                <br/>

                <textarea
                    value={"default value"}
                    onChange={this.handleChange}
                />

                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />Is Friendly?
                </label>
                <br/>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />Male
                </label>
                <br/>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />Female
                </label>
                <br/>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>{this.state.gender}</h1>
            </form>
        )
    }
}

export default App