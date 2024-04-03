import styles from './ServerInfo.module.css';

export default function ServerInfo() {
  return (
    <div className={styles.serverContainer}>
      <h3>Server(s)</h3>

      <div className={styles.ServerInfoContainer}>
        <h4 className={styles.subtitle}>Node.js</h4>
        <p>
          Node.js is a server-side JavaScript runtime environment that allows
          developers to build scalable and high-performance web applications;
          Utilizing event-driven, non-blocking I/O model, which makes it ideal
          for handling concurrent requests.
        </p>

        <p>
          With Node.js, developers can leverage JavaScript skills on both the
          front-end and back-end, ensuring a consistent development experience.
        </p>
      </div>

      <div className={styles.imgContainer}>
        <img
          className={styles.imageItem}
          src='https://www.comaporter.com/wp-content/uploads/2021/05/curso-gratis-backend-node-js-express.jpg'
          alt='server image'
        />
      </div>
    </div>
  );
}
