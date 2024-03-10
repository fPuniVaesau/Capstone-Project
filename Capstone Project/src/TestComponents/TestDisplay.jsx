import ListItems from './ListItems';
import styles from './TestDisplay.module.css';
export default function TestDisplay({ taskList, setTaskList }) {
  return (
    <div className={styles.container}>
      <ListItems taskList={taskList} setTaskList={setTaskList} />

      <div className={styles.buttonContainer}>
        <button className={styles.completeAndClose}>Complete</button>
        <button className={styles.completeAndClose}>X</button>
      </div>
    </div>
  );
}
