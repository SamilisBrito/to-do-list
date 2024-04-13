import clipboard from "../assets/clipboard.png";
import styles from "./TasksContent.module.css";

export function TasksContent() {
  return (
    <section>
      <header className={styles.headerContent}>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </header>
      <div className={styles.taskContainer}>
        <img src={clipboard} alt="ícone de prancheta" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  );
}
