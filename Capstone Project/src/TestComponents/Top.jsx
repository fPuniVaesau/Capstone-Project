import TestForm from './TestForm';
import TestDisplay from './TestDisplay';
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
      <TestDisplay taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
