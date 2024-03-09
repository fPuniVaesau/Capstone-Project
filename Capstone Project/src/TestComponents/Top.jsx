import TestForm from './TestForm';
import TestDisplay from './TestDisplay';
import { useState } from 'react';
import styles from './Top.module.css';

export default function Top() {
  const [name, setName] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <div className={styles.container}>
      <h1>💣 Tasks</h1>
      <TestForm
        name={name}
        setName={setName}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <TestDisplay taskList={taskList} />
    </div>
  );
}
