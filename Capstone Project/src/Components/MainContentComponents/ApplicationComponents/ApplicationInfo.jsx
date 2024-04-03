import styles from './ApplicationInfo.module.css';

export default function ApplicationInfo() {
  return (
    <div className={styles.applicationContainer}>
      <h3>Application(s)</h3>

      <div>
        <p>
          The application is the software or program that you will be running on
          the server. In this example the application would be this very
          application that you are viewing.
        </p>
      </div>
    </div>
  );
}
