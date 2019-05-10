import React, {Component} from "react"
import TodosItem from "./TodosItem"
import todosData from "./TodosData"

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id===id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return{
                todos : updatedTodos
            }
        })
    }


    render(){
        const todosComponents = this.state.todos.map(todo => 
            <TodosItem 
                key={todo.id}
                id={todo.id}
                text={todo.text} 
                completed={todo.completed}
                handleChange={this.handleChange} 
            />)
    
        return(
            <div className="todo-list">
                {todosComponents}
            </div>
        )
    }
}


export default App