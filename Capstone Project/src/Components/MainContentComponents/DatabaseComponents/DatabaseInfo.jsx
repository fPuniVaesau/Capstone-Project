import styles from './DatabaseInfo.module.css';

export default function DatabaseInfo() {
  return (
    <div className={styles.databaseContainer}>
      <h3>Database(s)</h3>

      <div className={styles.dbContainer}>
        <h4 className={styles.dbSubtitle}>MongoDB</h4>
        <p className={styles.dbInfo}>
          The Database Layer MongoDB is a NoSQL database that offers a flexible
          and scalable solution for storing data.
        </p>
        <p className={styles.dbInfo}>
          Unlike traditional relational databases, MongoDB uses a document-based
          model, allowing developers to work with JSON-like documents.
        </p>
        <p className={styles.dbInfo}>
          This flexibility enables faster development cycles and easier schema
          updates.
        </p>

        <p className={styles.dbInfo}>
          MongoDB is a NoSQL database that serves as the foundational layer in
          the MERN stack. In this section, we will explore MongoDB’s key
          features, data modeling concepts, and how it integrates with the MERN
          stack.
        </p>
      </div>

      <div className={styles.dbImageContainer}>
        <img
          className={styles.dbImage}
          src='https://www.mongodb.com/docs/assets/meta_generic.png'
          alt='MongoDb Image'
        />
      </div>
    </div>
  );
}
