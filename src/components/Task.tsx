import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TaskProps } from "../App";
import styles from "./Task.module.css";

interface TaskType {
  data: TaskProps;
  onDoneTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ data, onDoneTask, onDeleteTask }: TaskType) {
  return (
    <div className={styles.task}>
      <button onClick={() => onDoneTask(data.id)} className={styles.doneButton} title="Marcar">
        {data.done ? (
          <CheckCircle size={17} weight={"fill"} color={"#5e60ce"} />
        ) : (
          <Circle size={17} weight={"duotone"} color={"#4ea8de"} />
        )}
      </button>
      {data.done ? (
        <p className={styles.contentParagraph}> {data.content}</p>
      ) : (
        <p>{data.content}</p>
      )}
      <button
        onClick={() => onDeleteTask(data.id)}
        className={styles.trashButton}
        title="Deletar"
      >
        <Trash size={17} />
      </button>
    </div>
  );
}
