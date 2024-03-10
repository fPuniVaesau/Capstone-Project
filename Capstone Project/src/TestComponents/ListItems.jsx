import styles from './ListItems.module.css';

export default function ListItems({
  taskItem,
  taskList,
  setTaskList,
  setTaskItem,
  taskCount,
  setTaskCount,
}) {
  let handleDelete = (task) => {
    console.log(task);
    setTaskList(taskList.filter((taskInList) => taskInList !== task));
  };

  let handleCounter = (task) => {
    console.log(task);
  };

  let handleClick = (taskName) => {
    console.log(taskName)
  }

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task.name} className={styles.taskTitle}>
            <span onClick={()=>{handleClick(task.name)}}>{task.name}</span>
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.completeAndClose}
              onClick={() => {
                handleCounter(task);
              }}
            >
              Complete
            </button>
            <button
              className={styles.completeAndClose}
              onClick={() => {
                handleDelete(task);
              }}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
