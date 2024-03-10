import styles from './TestDisplay.module.css';
export default function TestDisplay({ taskList, setTaskList }) {
    const handleDelete = (task) => {
        console.log(task)
    }
  return (
    <div className={styles.container}>
      <div>
        {taskList.map((task) => (
          <div className={styles.taskContainer}>
            <p key={task} className={styles.taskTitle}>{task}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.completeAndClose}>Complete</button>
              <button className={styles.completeAndClose} onClick={()=>handleDelete(task)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
