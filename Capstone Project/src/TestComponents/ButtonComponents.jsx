import styles from "./ButtonComponents.module.css"

export default function ButtonComponents() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.completeAndClose}>Complete</button>
      <button className={styles.completeAndClose}>X</button>
    </div>
  );
}
