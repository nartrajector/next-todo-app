"use client";

import { useState } from "react";
import AddTodo from "@/components/add-todo";
import TodoLists from "@/components/todo-lists";

export interface Todos {
  id: number;
  todo: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = (newTodo: Todos) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const ongoingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      <div className="py-4 px-2 pb-16 space-y-4">
        <header className="flex gap-2 items-center">
          <h1>To Do Lists</h1>
        </header>

        {/* ADD TODO */}
        <AddTodo addTodo={addTodo} />

        {/* ONGOING TODO LISTS */}
        <TodoLists
          title="Ongoing"
          filteredTodo={ongoingTodos}
          handleToggleTodo={handleToggleTodo}
          emptyMessage="No ongoing to do found!"
        />

        {/* COMPLETE TODO LISTS */}
        <TodoLists
          title="Completed"
          filteredTodo={completedTodos}
          handleToggleTodo={handleToggleTodo}
          emptyMessage="No completed to do found!"
        />

        <footer className="fixed bottom-0 py-4 w-full bg-white">
          Melnar Ancit — {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
