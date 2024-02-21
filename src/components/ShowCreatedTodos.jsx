import React from "react";
import DeleteTodo from "./DeleteTodo";

export default function ShowCreatedTodos({ todos, setShowTodos }) {
  return (
    <div>
      {todos.map((todo, i) => (
        <div
          key={i}
          className="flex justify-between items-center mb-5 max-w-2xl mx-auto text-white font-medium text-2xl bg-blue-700 px-5 py-5 shadow-lg rounded-md"
        >
          <div>{todo}</div>
          <DeleteTodo setShowTodos={setShowTodos} todo={todos} i={i} />
        </div>
      ))}
    </div>
  );
}
