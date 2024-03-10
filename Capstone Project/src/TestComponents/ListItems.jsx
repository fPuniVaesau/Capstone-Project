import styles from './ListItems.module.css';

export default function ListItems({ taskItem, taskList, setTaskList, setTaskItem, taskCount, setTaskCount}) {

  let handleTest = (task) => {
    console.log(task);
    setTaskList(
      taskList.filter(taskInList => taskInList !== task)
    );
  }

  let handleCounter = () => {
    
  }

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task} className={styles.taskTitle}>
            {task}
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.completeAndClose} onClick={()=> {handleCounter}}>Complete</button>
            <button className={styles.completeAndClose} onClick={()=>{handleTest(task)}}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}
