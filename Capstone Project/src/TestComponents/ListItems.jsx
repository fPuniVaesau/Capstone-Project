import ButtonComponents from './ButtonComponents';
import styles from './ListItems.module.css';

export default function ListItems({ taskList, setTaskList }) {
  return (
    <div>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task} className={styles.taskTitle}>
            {task}
          </p>
          <ButtonComponents taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
}
