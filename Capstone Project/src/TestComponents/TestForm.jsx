import styles from './TestForm.module.css';

export default function TestForm({ setName, name, setTaskList, taskList }) {
  let handleInput = (e) => {
    setName(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, name]);
    setName('');
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor=''>⚡️</label>
        <input
          className={styles.inputField}
          type='text'
          onChange={handleInput}
          value={name}
          placeholder='What tasks do we have today?'
        />
        <button className={styles.submitbutton}>+</button>
      </form>
    </div>
  );
}
