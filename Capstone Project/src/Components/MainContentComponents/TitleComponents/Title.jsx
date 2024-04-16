import styles from './Title.module.css';

export default function Title({ mainTitle }) {
  return (
    <div className={styles.titleContainer}>
      <div>
        <p>What is</p>
        <p>the</p>
      </div>
      <div>
        <h1 className={styles.mainTitle}>{mainTitle}</h1>
      </div>
    </div>
  );
}
