
import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietary: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(event){
        const{name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <main>
                <form>
                    <input 
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        onChange={this.handleChange} 
                    />
                    <br />

                    <input 
                        value={this.state.lastName}
                        name="lastName"
                        type="text"
                        onChange={this.handleChange} 
                        placeholder="Last Name" 
                    />
                    <br />

                    <input 
                        value={this.state.age}
                        name="age"
                        type="text"
                        onChange={this.handleChange} 
                        placeholder="Age" 
                    />
                    <br />
                    
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                        checked={this.state.gender === "male"}
                    />Male
                    </label>
                    <br />
                    
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                        checked={this.state.gender === "female"}
                    />Female
                    </label>
                    <br />

                    {/* Create select box for location here */}
                    <br />
                    
                    <input
                        type="checkbox"
                        
                    />

                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
