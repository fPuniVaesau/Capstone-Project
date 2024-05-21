import styles from './Resources.module.css';

export default function Resources() {
  return (
    <div className={styles.resourceContainer}>
      <div>
        <h1>Resources</h1>
        <p>used to learn the Backend.</p>
      </div>

      <div>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/">MDN Mozilla Docs</a></li>
          <li><a href="https://medium.com/">Medium</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
          <li><a href="https://www.codecademy.com/">Codecademy</a></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
