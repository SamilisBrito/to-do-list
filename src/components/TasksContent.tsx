import { TaskProps } from "../App";
import clipboard from "../assets/clipboard.png";
import { Task } from "./Task";
import styles from "./TasksContent.module.css";

interface TasksContentProps {
  tasks: TaskProps[];
  onDoneTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TasksContent({
  tasks,
  onDoneTask,
  onDeleteTask,
}: TasksContentProps) {
  
  const pendingTask = tasks.filter((task) => !task.done);
  const completedTask = tasks.filter((task) => task.done);

  return (
    <section>
      <header className={styles.headerContent}>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        {completedTask.length === 0 ? (
          <p>
            Concluídas <span>{completedTask.length}</span>
          </p>
        ) : (
          <p>
            Concluídas{" "}
            <span>
              {completedTask.length} de {tasks.length}
            </span>
          </p>
        )}
      </header>
      <div>
        {tasks.length === 0 ? (
          <div className={styles.taskContainer}>
            <img src={clipboard} alt="ícone de prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <>
            {pendingTask.map((task) => {
              return (
                <Task
                  key={task.id}
                  data={task}
                  onDoneTask={onDoneTask}
                  onDeleteTask={onDeleteTask}
                />
              );
            })}

            {completedTask.map((task) => {
              return (
                <Task
                  key={task.id}
                  data={task}
                  onDoneTask={onDoneTask}
                  onDeleteTask={onDeleteTask}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
