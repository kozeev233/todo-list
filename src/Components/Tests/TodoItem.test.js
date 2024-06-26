import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';

test('renders TodoItem and toggles completion', () => {
    const toggleComplete = jest.fn();
    const removeTodo = jest.fn();
    const editTodo = jest.fn();
    const todo = { text: 'Test Todo', completed: false };
    const { getByText } = render(
        <TodoItem
            todo={todo}
            index={0}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
        />
    );

    const completeButton = getByText('Complete');
    fireEvent.click(completeButton);
    expect(toggleComplete).toHaveBeenCalledWith(0);

    const removeButton = getByText('Remove');
    fireEvent.click(removeButton);
    expect(removeTodo).toHaveBeenCalledWith(0);
});
