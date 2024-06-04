import Todo from "@/components/todo";

export default function App() {
  return (
    <>
      <div className="py-4 px-2 pb-16 space-y-4">
        <header className="flex gap-2 items-center">
          <h1>To Do Lists</h1>
        </header>

        <Todo />

        <footer className="fixed bottom-0 py-4 w-full bg-white">
          Melnar Ancit — {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
