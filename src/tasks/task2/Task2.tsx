import React, { useRef, useState } from 'react'

interface Todo {
    id: number;
    text: string;
}

// TODO: find the bug and fix it like a PRO
export const Task2 = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const todoRef = useRef<HTMLInputElement>(null);

    const handleAddTodo = () => {
        setTodos((prev) => [
            ...prev,
            { id: prev.length + 1, text: todoRef.current!.value }
        ]);
        todoRef.current!.value = '';
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <input ref={todoRef} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}
