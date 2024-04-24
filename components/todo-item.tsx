import type { Todos } from "@/app/page";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"

interface TodoItemProps {
  todo: Todos;
  handleToggleTodo: (id: number) => void;
}

export default function TodoItem({ todo, handleToggleTodo }: TodoItemProps) {
  return (
    <div className="flex gap-2 items-center mb-2">
      <Checkbox
        id={todo.todo}
        className="h-4 w-4"
        checked={todo.completed}
        onClick={() => handleToggleTodo(todo.id)}
      />
      <Label
        htmlFor={todo.todo}
        className={`leading-none text-lg ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.todo}
      </Label>
    </div>
  );
}
