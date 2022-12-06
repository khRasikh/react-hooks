import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} className="bg-gray-50 text-black border-2 px-2 py-1 rounded-md m-2"/>
      <button type="submit" onClick={handleSubmit} className="bg-green-700 text-white rounded-md px-2 py-1">
        Add
      </button>
    </form>
  );
};
