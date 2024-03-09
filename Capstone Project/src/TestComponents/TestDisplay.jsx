import styles from './TestDisplay.module.css';
export default function TestDisplay({ taskList }) {
    const handleDelete = () => {
        console.log(taskList)
    }
  return (
    <div className={styles.container}>
      <div>
        {taskList.map((task) => (
          <div className={styles.taskContainer}>
            <p key={task} className={styles.taskTitle}>{task}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.completeAndClose}>Complete</button>
              <button className={styles.completeAndClose} onClick={handleDelete}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
