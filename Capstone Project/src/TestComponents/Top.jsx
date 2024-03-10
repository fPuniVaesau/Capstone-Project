import TestForm from './TestForm';
import ListItems from './ListItems';
import { useState } from 'react';
import styles from './Top.module.css';

export default function Top() {
  const [taskItem, setTaskItem] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <div className={styles.container}>
      <h1>💣 Tasks</h1>
      <TestForm
        taskItem={taskItem}
        setTaskItem={setTaskItem}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <ListItems
        className={styles.test}
        taskItem={taskItem}
        setTaskItem={setTaskItem}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}
