import React from "react"

function FormComponent(props){
    return(
        <main>
            <form>
                <input 
                    value={props.data.firstName}
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    onChange={props.handleChange} 
                />
                <br />

                <input 
                    value={props.data.lastName}
                    name="lastName"
                    type="text"
                    onChange={props.handleChange} 
                    placeholder="Last Npropsame" 
                />
                <br />

                <input 
                    value={props.data.age}
                    name="age"
                    type="text"
                    onChange={props.handleChange} 
                    placeholder="Age" 
                />
                <br />
                
                <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={props.handleChange}
                    checked={props.data.gender === "male"}
                />Male
                </label>
                <br />
                
                <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={props.handleChange}
                    checked={props.data.gender === "female"}
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
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {/* Destination here */}</p>
            <p>
                Your dietary restrictions: 
                {/* Dietary restrictions here, comma separated */}
            </p>
        </main>
    )
}

export default FormComponent