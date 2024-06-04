"use client";

import { useState } from "react";
import AddTodo from "@/components/add-todo";
import TodoLists from "@/components/todo-lists";

export interface Todos {
  id: number;
  todo: string;
  completed: boolean;
}

export default function Todo() {
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

  return (
    <>
      <AddTodo addTodo={addTodo} />

      <TodoLists
        todos={todos}
        setTodos={setTodos}
        handleToggleTodo={handleToggleTodo}
        emptyMessage="No ongoing to do found!"
      />
    </>
  );
}
