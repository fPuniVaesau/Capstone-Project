import styles from './DatabaseInfo.module.css';

export default function DatabaseInfo() {
  return (
    <div className={styles.databaseContainer}>
      <h3>Database(s)</h3>

      <div>
        <h4>MongoDB</h4>
        <p>
          The Database Layer MongoDB is a NoSQL database that offers a flexible
          and scalable solution for storing data.
        </p>
        <p>
          Unlike traditional relational databases, MongoDB uses a document-based
          model, allowing developers to work with JSON-like documents.
        </p>
        <p>
          This flexibility enables faster development cycles and easier schema
          updates.
        </p>
      </div>
    </div>
  );
}
