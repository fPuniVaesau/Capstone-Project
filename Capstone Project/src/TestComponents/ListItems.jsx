import styles from './ListItems.module.css';

export default function ListItems({ taskItem, taskList, setTaskList, setTaskItem }) {
  
  let handleDelete = (taskItem) => {
    console.log(taskItem)
  }

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task} className={styles.taskTitle}>
            {task}
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.completeAndClose}>Complete</button>
            <button className={styles.completeAndClose} onClick={()=>{handleDelete(taskItem)}}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}
