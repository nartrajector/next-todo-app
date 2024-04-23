import type { Todos } from "@/app/page";
import TodoItem from "./todo-item";

interface TodoListsProps {
  title: string;
  filteredTodo: Todos[];
  handleToggleTodo: (id: number) => void;
  emptyMessage: string;
}

export default function TodoLists({
  title,
  filteredTodo,
  handleToggleTodo,
  emptyMessage,
}: TodoListsProps) {
  return (
    <div>
      <h2 className="text-md text-gray-500">{title}</h2>

      {filteredTodo.length > 0 ? (
        filteredTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
          />
        ))
      ) : (
        <div>{emptyMessage}</div>
      )}
    </div>
  );
}
