import styles from './BACintro.module.css'

export default function BACintro() {
  return (
    <div className={styles.infoContainer}>
      <p>
        When it comes to designing web applications, there are 3 things you must
        consider...
      </p>

      <div>
        <div>
          <h4>The Server</h4>
          <p>
            the computer or machine that will host your application and listens
            for incoming request from the client
          </p>
        </div>

        <div>
          <h4>The Application</h4>
          <p></p>
        </div>

        <div>
          <h4>Database</h4>
        </div>
      </div>
    </div>
  );
}
