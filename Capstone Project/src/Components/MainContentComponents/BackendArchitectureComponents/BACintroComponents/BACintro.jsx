import styles from './BACintro.module.css';

export default function BACintro() {
  return (
    <div className={styles.infoContainer}>
      <p>
        When it comes to designing web applications, there are 3 things you must
        consider...
      </p>

      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <h4>The Server</h4>
          <p>
            the computer or machine that will host your application and listens
            for incoming request from the client.
          </p>
          <p>The server can be physical, virtual or on the cloud.</p>
        </div>

        <div className={styles.info}>
          <h4>The Application</h4>
          <p>
            the software or program that will run on the server which contains
            the logic and functionality of the application.
          </p>
          <p>
            It can be written in your choice of programming language and
            framework that suits your needs.
          </p>
        </div>

        <div className={styles.info}>
          <h4>The Database</h4>
          <p>
            Where you will store and manage your the data of your application.
          </p>
          <p>
            It can be a relational database like MySQL or PostgreSQL, perhaps a
            non-relational database like MongoDB or Firebase, or a combination
            of both.
          </p>
        </div>
      </div>
    </div>
  );
}
