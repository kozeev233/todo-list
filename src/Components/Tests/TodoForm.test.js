import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../TodoForm';

test('renders TodoForm and adds a new todo', () => {
    const addTodo = jest.fn();
    const { getByPlaceholderText, getByText } = render(<TodoForm addTodo={addTodo} />);

    const input = getByPlaceholderText('Add a new todo');
    const button = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(addTodo).toHaveBeenCalledWith({ text: 'New Todo', completed: false });
});
