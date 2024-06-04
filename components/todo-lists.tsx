import type { Todos } from "./todo";
import TodoItem from "./todo-item";
import { Reorder } from "framer-motion";

interface TodoListsProps {
  todos: Todos[];
  setTodos: (todos: Todos[]) => void;
  handleToggleTodo: (id: number) => void;
  emptyMessage: string;
}

export default function TodoLists({
  todos,
  setTodos,
  handleToggleTodo,
  emptyMessage,
}: TodoListsProps) {
  return (
    <div>
      {todos.length > 0 ? (
        <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleTodo={handleToggleTodo}
            />
          ))}
        </Reorder.Group>
      ) : (
        <div>{emptyMessage}</div>
      )}
    </div>
  );
}
