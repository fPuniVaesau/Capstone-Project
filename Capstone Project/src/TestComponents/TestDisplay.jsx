import styles from './TestDisplay.module.css';
export default function TestDisplay({ taskList }) {
  return (
    <div className={styles.container}>
      <div>
        {taskList.map((task) => (
          <div className={styles.taskContainer}>
            <p className={styles.taskTitle}>{task}</p>
            <div>
                <button>Complete</button>
                <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
