// import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputAddTask } from "./components/InputAddTask";
import {TasksContent} from './components/TasksContent'
import "./global.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <header className={styles.headerContent}>
          <InputAddTask />
        </header>
        <section>
          <TasksContent/>
        </section>
      </main>
    </div>
  );
}

export default App;
