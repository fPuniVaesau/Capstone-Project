import styles from './Resources.module.css';

export default function Resources() {
  return (
    <div className={styles.resourceContainer}>
      <div>
        <h1>This is a test</h1>
        <p>resources page</p>
      </div>

      <div>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/">MDN Mozilla Docs</a></li>
          <li><a href="https://medium.com/">Medium</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
