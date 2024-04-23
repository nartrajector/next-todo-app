import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import type { Todos } from "@/app/page";

interface AddTodoProps {
  addTodo: (newTodo: Todos) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (!todo) return;
    //
    const newTodo: Todos = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    addTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="flex gap-2">
      <Input
        type="type"
        placeholder="What to do?"
        className="max-w-full sm:max-w-xs"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add todo</Button>
    </div>
  );
}
