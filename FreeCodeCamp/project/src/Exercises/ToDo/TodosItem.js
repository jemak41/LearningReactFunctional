import React from "react"

function TodosItem(props){
    const styles = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecorationLine: "line-through"
    }
    return(
        <div className="todo-item ">
            <input 
                type="checkbox" 
                checked={props.completed}
                onChange={() => props.handleChange(props.id)}
            /> 
            <p style={props.completed ? styles : null}>{props.text}</p> 
        </div>
        )
    }

export default TodosItem



