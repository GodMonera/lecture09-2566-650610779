"use client";

import { useState } from "react";
import { Task } from "./Task";
import { nanoid } from "nanoid";

export default function TodolistPage() {
  const [taskInput, setTaskInput] = useState("");

  const [tasks, setTask] = useState([
    { id: "1", title: "Eat" },
    { id: "2", title: "Sleep" },
  ]);

  const taskInputOnChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = (newTaskTitle) => {
    const newTask = { id: nanoid(), title: newTaskTitle };
    //make new array base on old "tasks" and add newTask as last one
    const newTasks = [...tasks, newTask];
    setTask(newTasks);
  };

  const addTaskBtnOnClick = () => {
    addTask(taskInput);
  };

  const deleteTask = (TaskID) => {
    const newTasks = tasks.filter((task) => task.id !== TaskID);
    setTask(newTasks);
  };

  return (
    <div style={{ maxWidth: "400px" }} className="mx-auto">
      <h3 className="text-center">Simple Todo List</h3>
      <div className="d-flex">
        <input
          className="form-control d-inline mx-1"
          placeholder="Insert task"
          style={{ width: "250px" }}
          onChange={taskInputOnChange}
          value={taskInput}
        />

        <button className="btn btn-primary " onClick={addTaskBtnOnClick}>
          Add task
        </button>
      </div>
      {tasks.map((task) => (
        <Task
          id={task.id}
          title={task.title}
          key={task.id}
          deleteFunc={deleteTask}
        />
      ))}
    </div>
  );
}
