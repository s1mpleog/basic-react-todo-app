import React, { useEffect, useState } from "react";
import ShowCreatedTodos from "./ShowCreatedTodos";

export default function AddTodoInput() {
  const [todo, setTodo] = useState("");
  const [showTodos, setShowTodos] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setShowTodos((prevTodo) => [...prevTodo, todo]);
      setTodo((prev) => "");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [showTodos]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="px-10 py-10 bg-black/70 backdrop-blur-sm flex max-w-4xl
         rounded-md shadow-lg mx-auto my-10 items-center justify-center"
      >
        <div className="flex items-center justify-center gap-5 w-full">
          <input
            value={todo}
            onChange={handleTodo}
            className="outline-none flex-1 focus:outline-none ring-0 py-3 rounded-md shadow-md indent-8"
            placeholder="add todo"
            type="text"
          />
          <button
            type="submit"
            className="bg-black text-white px-10 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      </form>
      <ShowCreatedTodos todos={showTodos} setShowTodos={setShowTodos} />
    </>
  );
}
