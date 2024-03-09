import styles from './TestDisplay.module.css';
export default function TestDisplay({ taskList }) {
  return (
    <div className={styles.container}>
      <div>
        {taskList.map((task) => (
          <div className={styles.taskContainer}>
            <p>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
