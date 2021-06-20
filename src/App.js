import './App.css';
import React from "react";
import TodoList from "./components/Todo/TodoList";
import Context from "./context";
import AddTodo from "./components/Todo/AddTodo";
import Modal from "./components/Todo/Modal/Modal";

function App() {
    const [todos, setTodos] = React.useState([{id: 0, completed: false, name: 'Anna'}, {
        id: 1,
        completed: false,
        name: 'Max'
    }, {
        id: 2,
        completed: true,
        name: 'Luck'
    }, {id: 3, completed: false, name: 'Dima'}])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))

    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{name: title, id: todos.length, completed: false}]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>TodoList</h1>
                <AddTodo onCreate={addTodo}/>
                <Modal/>
                <TodoList onToggle={toggleTodo} arr={todos}/>
            </div>
        </Context.Provider>
    );
}

export default App;
