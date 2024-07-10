import "./App.css";
import { Button, Checkbox, Grid, TextField } from "@mui/material";
import { useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [newInput, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // add new line to todo list
  const handleAddTodo = () => {
    if (newInput.trim() !== "") {
      const newTodo = {
        id: Date.now().toString(),
        text: newInput,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInput("");
    }
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: string, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <div>
        <Grid container spacing={2} className="inputRow">
          <Grid item xs={10}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Note"
              variant="outlined"
              value={newInput}
              onChange={(e) => setInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleAddTodo}>
              Add
            </Button>
          </Grid>
        </Grid>
        <h1 className="header">ToDo List</h1>
        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Checkbox
                checked={todo.completed}
                onChange={(e) =>
                  handleToggleComplete(todo.id, e.target.checked)
                }
              />
              {todo.text}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
