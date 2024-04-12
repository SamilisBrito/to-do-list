import styles from './InputAddTask.module.css';
import { PlusCircle } from "phosphor-react";
export function InputAddTask() {
  return (
    <>
      <input className={styles.newTask} type="text" id="" placeholder="Adicione uma nova tarefa" />
      <button className={styles.createButton} type="button">
        Criar <PlusCircle size={16}/>
      </button>
    </>
  );
}
