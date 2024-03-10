import ButtonComponents from './ButtonComponents';
import ListItems from './ListItems';
import styles from './TestDisplay.module.css';
export default function TestDisplay({ taskList, setTaskList }) {
  return (
    <div className={styles.container}>
      <ListItems taskList={taskList} setTaskList={setTaskList} />

      <ButtonComponents />
    </div>
  );
}
