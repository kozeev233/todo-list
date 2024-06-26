import React, { useState } from 'react';

const TodoItem = ({ todo, index, removeTodo, toggleComplete, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTodo(index, newText);
        setIsEditing(false);
    };

    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                todo.text
            )}
            <button onClick={() => toggleComplete(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTodo(index)}>Remove</button>
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </li>
    );
};

export default TodoItem;
