import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo({
            text: value,
            completed: false,
        });
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
