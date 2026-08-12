import TodoContext from "./TodoContext";
import { useState, useEffect } from "react";

const TODOS = 'todos';

export function TodoProvider({ children }) {

    const savedTodos = localStorage.getItem(TODOS)

    const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])
    const [showDialog, setShowDialog] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(null)

    const openFormTodoDialog = () => {
        if (todos) {
    setShowDialog (true)
    }

    const closeFormTodoDialog = () => {
    setShowDialog (false)
    setSelectedTodo(null)
    }

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos])

    const addTodo = (formData) => {
        const description = formData.get('description')
        setTodos(prevState => {
            const todo = {
                id: prevState.length + 1,
                description: description,
                completed: false,
                createdAt: new Date().toISOString() //pegar a data atual
            }
            return [...prevState, todo]
        })
    }

    const toggleTodoCompleted = (todo) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id == todo.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
    }

    const removeTodo = (todo) => {
        setTodos(prevState => {
            return prevState.filter(t => t.id !== todo.id)
        })
    }

   
        
    return (
        <TodoContext
            value={{
                todos,
                addTodo,
                toggleTodoCompleted,
                removeTodo,
                showDialog,
                openFormTodoDialog,
                closeFormTodoDialog,
                selectedTodo
            }}
        >
            {children}
        </TodoContext>
    )
}