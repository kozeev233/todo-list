import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const editTodo = (index, newText) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
