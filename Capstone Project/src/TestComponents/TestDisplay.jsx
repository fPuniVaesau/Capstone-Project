import styles from './TestDisplay.module.css';
export default function TestDisplay({ guestList }) {
  return (
    <div className={styles.container}>
      <div className={styles.taskContainer}>
        {guestList.map((person) => (
          <p>{person}</p>
        ))}
      </div>
    </div>
  );
}
