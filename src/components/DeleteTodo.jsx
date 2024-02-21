import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteTodo({ setShowTodos, todo, i }) {
  const handleClick = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setShowTodos(updatedTodo);
  };

  return (
    <div>
      <MdDelete
        className="cursor-pointer"
        onClick={() => handleClick(i)}
        size={25}
      />
    </div>
  );
}
