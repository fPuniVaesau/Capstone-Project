import styles from './Hero.module.css';
export default function Hero({ title}) {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>{title}</h1>
    </div>
  );
}
