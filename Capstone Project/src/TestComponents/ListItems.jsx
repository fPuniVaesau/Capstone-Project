import styles from './ListItems.module.css';

export default function ListItems({ taskItem, taskList, setTaskList, setTaskItem }) {

  let handleTest = (task) => {
    console.log(task);
    
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
            <button className={styles.completeAndClose} onClick={()=>{handleTest(task)}}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}
