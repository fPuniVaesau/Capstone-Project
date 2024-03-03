import styles from './Hero.module.css';
export default function Hero({ title, imgUrl }) {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <img className={styles.heroImage}  src={imgUrl} alt="Hero Image" />
    </div>
  );
}
