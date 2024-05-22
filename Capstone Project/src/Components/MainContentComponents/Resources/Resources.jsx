import styles from './Resources.module.css';

export default function Resources() {
  return (
    <div className={styles.resourceContainer}>
      <div>
        <h2 className={styles.headerTwo}>Resources</h2>
        <h3 className={styles.headerThree}>used to learn the Backend.</h3>
      </div>

      <div className={styles.resourceList}>
        <ul>
          <h4 className={styles.subTitle}>Sites</h4>
          <li><a href="https://developer.mozilla.org/en-US/">MDN Mozilla Docs</a></li>
          <li><a href="https://medium.com/">Medium</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
          <li><a href="https://www.codecademy.com/">Codecademy</a></li>
          <li></li>
        </ul>
      </div>

      <div className={styles.articleContainer}>
        <h4 className={styles.subTitle}>Articles</h4>
        <ul>
            <li><a href="https://medium.com/@asiandigitalhub/what-is-node-js-and-how-it-work-490f5ecba665">What is Node.js and How it Work?</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
      </div>
    </div>
  );
}
