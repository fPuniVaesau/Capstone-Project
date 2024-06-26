import styles from './ApplicationInfo.module.css';

export default function ApplicationInfo() {
  return (
    <div className={styles.applicationContainer}>
      <h3>Application(s)</h3>

      <div className={styles.appInfoContainer}>
        <h4 className={styles.appSubtitle}>React.js</h4>
        <p className={styles.appInfo}>
          React.js is a JavaScript library that is known for its declarative,
          component based approach to creating and building out user interfaces.
        </p>

        <p className={styles.appInfo}>
          React allows developers to break down large complex applications into
          smaller re-usable components that are easier to manage.
        </p>

        <p className={styles.appInfo}>
          A major advantage for the use of React.js is its virtual DOM, which is
          a light weight representation of the actual DOM.
        </p>

        <p className={styles.appInfo}>
          This allows for components on the page to re-render when updated, not the entire web page. This improves overall performance and a better overall user experience.
        </p>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.appImage} src="https://setscholars.net/wp-content/uploads/2022/12/React-JS.png" alt="" />
      </div>
    </div>
  );
}
