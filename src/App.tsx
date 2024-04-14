import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputAddTask } from "./components/InputAddTask";
import { TasksContent } from "./components/TasksContent";
import "./global.css";

export interface TaskProps {
  id: string;
  content: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function onAddTask(content: string) {
    const task: TaskProps = {
      id: uuid(),
      content,
      done: false,
    };
    setTasks([...tasks, task]);
  }

  function onDoneTask(id: string) {
    const task = tasks.find((task) => task.id === id);
    const oldTasks = tasks.filter((oldTask)=> oldTask.id !== id)
    if (task && oldTasks) {
      task.done = !task.done
      setTasks([...oldTasks, task])
    }
  }

  function onDeleteTask(id: string){
    const test = tasks.filter((task) => task.id !== id)

    setTasks(test)
  }

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <header className={styles.headerContent}>
          <InputAddTask onAddTask={onAddTask} />
        </header>
        <section>
          <TasksContent tasks={tasks} onDoneTask={onDoneTask}  onDeleteTask={onDeleteTask}/>
        </section>
      </main>
    </div>
  );
}

export default App;
