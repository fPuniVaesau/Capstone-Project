import styles from './TestDisplay.module.css';
export default function TestDisplay({ guestList }) {
  return (
    <div className={styles.container}>
      <div>
        {guestList.map((person) => (
          <div className={styles.taskContainer}>
            <p>{person}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
