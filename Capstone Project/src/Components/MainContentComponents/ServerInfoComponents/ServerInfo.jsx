import styles from './ServerInfo.module.css';

export default function ServerInfo() {
  return (
    <div className={styles.serverContainer}>
      <h3>Server(s)</h3>

      <div className={styles.ServerInfoContainer}>
        <h4 className={styles.subtitle}>Node.js</h4>
        <p className={styles.serverInfo}>
          Node.js is a server-side JavaScript runtime environment that allows
          developers to build scalable and high-performance web applications.
        </p>

        <p className={styles.serverInfo}>
          Utilizing event-driven, non-blocking I/O model, which makes it ideal
          for handling concurrent requests.
        </p>

        <p className={styles.serverInfo}>
          With Node.js, developers can leverage JavaScript skills on both the
          front-end and back-end, ensuring a consistent development experience.
        </p>
      </div>

      <div className={styles.ServerInfoContainer}>
        <h4 className={styles.subtitle}>Express.js</h4>
        <p className={styles.serverInfo}>
          The Web Application Framework Express.js is a minimalist and flexible
          web application framework for Node.js.
        </p>

        <p className={styles.serverInfo}>
          It provides a simple yet powerful set of features for building web
          applications, such as routing, middleware support, and template
          engines.
        </p>

        <p className={styles.serverInfo}>
          Express.js simplifies the process of handling HTTP requests and
          building APIs, making it an essential part of the MERN stack.
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
