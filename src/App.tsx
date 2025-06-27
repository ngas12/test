import { useState } from "react";

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  function createTodo() {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        content: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  }

  function toggleTodo(id: string) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  function deleteTodo(id: string) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <main>
      <h1>My Todos</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter todo content"
          onKeyPress={(e) => e.key === "Enter" && createTodo()}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button onClick={createTodo}>+ Add Todo</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: "10px" }}
            />
            <span style={{ 
              flex: 1, 
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#888" : "inherit"
            }}>
              {todo.content}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                background: "#ff4444", 
                color: "white", 
                border: "none", 
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p style={{ color: "#888", fontStyle: "italic" }}>
          No todos yet. Add one above!
        </p>
      )}
      <div style={{ marginTop: "30px", padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}>
        🎉 Static site successfully hosted on AWS Amplify!
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/">
          Learn more about Amplify hosting.
        </a>
      </div>
    </main>
  );
}

export default App;
