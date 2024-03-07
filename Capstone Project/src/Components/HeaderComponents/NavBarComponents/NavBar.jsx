import styles from './NavBar.module.css';

export default function NavBar() {
  const navItems = ['About', 'Projects', 'Join'];
  return (
    <div>
      <ul className={styles.ul}>
        {navItems.map((item) => (
          <li className={styles.listItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
