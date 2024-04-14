import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./InputAddTask.module.css";

interface InputAddTaskProps {
  onAddTask: (content: string) => void;
}

export function InputAddTask({ onAddTask }: InputAddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleContent(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim().length > 0) {
      onAddTask(newTask);
      setNewTask("");
    }
  }

  const isTaskEmpty = newTask.length === 0;

  return (
    <form className={styles.form}>
      <input
        onChange={handleContent}
        value={newTask}
        className={styles.newTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        onClick={handleAddTask}
        className={styles.createButton}
        type="submit"
        disabled={isTaskEmpty}
      >
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
