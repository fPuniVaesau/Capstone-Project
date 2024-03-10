import styles from './ListItems.module.css';

export default function ListItems({ taskItem, taskList, setTaskList }) {

  return (
    <div>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task} className={styles.taskTitle}>
            {task}
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.completeAndClose}>Complete</button>
            <button className={styles.completeAndClose}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}
