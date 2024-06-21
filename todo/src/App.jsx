import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo =  (todo) => {
     setTodos([{ id: Date.now(), ...todo }, ...todos])
    
  }

  const updateTodo = (todo, id) => {
    setTodos(todos => todos.map(t => t.id === id ? todo : t))
 
  }
  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(t => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos => todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  useEffect(() => {
    const localTodo = localStorage.getItem("todos");
    console.log("localTodo", localTodo);
    if (localTodo && localTodo.length > 0) {
      setTodos(JSON.parse(localTodo))
      console.log("localTodo", todos);
    }
  }, [])

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos])

 
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(todo => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>

            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
