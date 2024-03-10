import

export default function ListItems() {
  return (
    <div>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task} className={styles.taskTitle}>
            {task}
          </p>
        </div>
      ))}
    </div>
  );
}
