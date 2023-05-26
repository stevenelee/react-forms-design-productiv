import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [clicked, setClicked] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    console.log("clicked");
    setClicked(true);
  }
  console.log("todo", todo);
  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    const updatedTodo = { ...formData, id: todo.id };
    update(updatedTodo);
    setClicked(false);
  }

  return (
    <div className="EditableTodo">
      {!clicked &&
      <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
          </button>
        </div>
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          description={todo.description}
          priority={todo.priority}
        />
      </div>}
      {clicked &&
          <div>
            <TodoForm initialFormData={todo} handleSave={handleSave} />
          </div>}
    </div>
  );
}

export default EditableTodo;
