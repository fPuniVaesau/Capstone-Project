import styles from './TestForm.module.css';

export default function TestForm({ setTaskItem, taskItem, setTaskList, taskList }) {
  let handleInput = (e) => {
    setTaskItem(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if(taskItem !== ""){setTaskList([...taskList, taskItem]);} else{console.log("Please add task")}
    setTaskItem('');
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor=''>🧩</label>
        <input
          className={styles.inputField}
          type='text'
          onChange={handleInput}
          value={taskItem}
          placeholder='What tasks do we have today?'
        />
        <button className={styles.submitButton}>+</button>
      </form>
    </div>
  );
}
