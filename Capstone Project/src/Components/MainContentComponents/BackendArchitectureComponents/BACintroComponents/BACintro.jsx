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
          <h4 className={styles.subTitle}>The Server</h4>
          <p>
            Refers to the computer or machine that will host your application and listens
            for incoming request from the client.
          </p>
          <p>The server can be physical, a virtual server or on a server that is hosted on the cloud.</p>
          <p>
            For the capstone project we will work with node.js to create a server where our application will be hosted on.
          </p>
          <p>
            Servers can be very complex with a lot of components but for the capstone I will focus on creating a simple server.
          </p>
        </div>

        <div className={styles.info}>
          <h4 className={styles.subTitle}>The Application</h4>
          <p>
            Refers to the software or program that will run on the server which contains
            the logic and functionality of the application.
          </p>
          <p>
            It can be written in your choice of programming language and
            framework that suits your needs.
          </p>
          <p>
            The languages that I will be using for this project will be JavaScript along with different frameworks and tools.
          </p>
          <p>
            Some will be used for the front-end development and some will be used for the back-end development of this project.
          </p>
        </div>

        <div className={styles.info}>
          <h4 className={styles.subTitle}>The Database</h4>
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
