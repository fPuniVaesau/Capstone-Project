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
          <li><a href="https://www.google.com/">Google</a></li>
          <li><a href="https://developer.mozilla.org/en-US/">MDN Mozilla Docs</a></li>
          <li><a href="https://medium.com/">Medium</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
          <li><a href="https://www.codecademy.com/">Codecademy</a></li>
          <li><a href="https://www.mongodb.com/docs/manual/?_ga=2.54354472.1626388945.1716336451-150035614.1713312228">MongoDB</a></li>
          <li><a href="https://nodejs.org/en">Node.js</a></li>
          <li><a href="https://react.dev/">React.js</a></li>
          <li><a href="https://expressjs.com/">Express.js</a></li>
        </ul>
      </div>

      <div className={styles.articleContainer}>
        <ul>
        <h4 className={styles.subTitle}>Articles</h4>
          <li><a href="https://medium.com/@namtheartist95/what-is-backend-development-bcc6a15f8472">What Is Backend Development?</a></li>
          <li><a href="https://medium.com/@asiandigitalhub/what-is-node-js-and-how-it-work-490f5ecba665">What is Node.js and How it Work?</a></li>
          <li><a href="https://medium.com/@nonamedev/building-full-stack-applications-with-mern-stack-a-comprehensive-guide-402e99d2e959">Building Full-Stack Applications...</a></li>
          <li><a href="https://medium.com/nerd-for-tech/all-basics-of-mongodb-in-10-minutes-baddaf6b6625">All Basics of MongoDB in 10 Minutes</a></li>
          <li><a href="https://medium.com/@iamme24cl/back-end-architecture-bde9e0dd06">Back-end Architecture?</a></li>
          <li><a href="https://sebastiancarlos.com/react-js-best-practices-from-the-new-docs-1c65570e785d">React JS Best Practices</a></li>
        </ul>
      </div>
    </div>
  );
}
