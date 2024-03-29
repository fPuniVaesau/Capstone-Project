import styles from './NavBarLogo.module.css';

export default function NavBarLogo({ imgUrl, altDiscription }) {
  return (
    <div>
      <img className={styles.logo} src={imgUrl} alt={altDiscription} />
    </div>
  );
}
