import type { Todos } from "./todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { GripVertical } from "lucide-react";
import { Reorder, useDragControls } from "framer-motion";

interface TodoItemProps {
  todo: Todos;
  handleToggleTodo: (id: number) => void;
}

export default function TodoItem({ todo, handleToggleTodo }: TodoItemProps) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={todo.id}
      value={todo}
      dragListener={false}
      dragControls={controls}
      className="flex gap-2 items-center p-1"
    >
      <GripVertical
        className="cursor-grabbing reorder-handle"
        onPointerDown={(e) => controls.start(e)}
      />
      <Checkbox
        id={todo.todo}
        className="h-5 w-5"
        checked={todo.completed}
        onClick={() => handleToggleTodo(todo.id)}
      />
      <Label
        className={`leading-none text-2xl  ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.todo}
      </Label>
    </Reorder.Item>
  );
}
