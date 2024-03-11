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

  let handleClick = (taskName) => {
    console.log(taskName)
  }

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task.name} className={styles.taskTitle}>
            {task.name}
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.completeAndClose}
              onClick={()=>{handleClick(task.name)}}
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
