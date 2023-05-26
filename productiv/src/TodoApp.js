import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp( { initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(todo) {
    let newTodo = {...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    //TODO: is it ok to use setTodo twice in a row?
    // let updateTodos = todos => todos.filter(todo => todo.id !== updatedTodo.id);
    // setTodos(todos => [...updateTodos, updatedTodo]);
    setTodos(todos => todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <EditableTodoList todos={todos} update={update} remove={remove}/>
            {todos.length === 0 && <span className="text-muted">
              You have no todos.</span>}
          </div>

          <div className="col-md-6">
            (if no top todo, omit this whole section)
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;