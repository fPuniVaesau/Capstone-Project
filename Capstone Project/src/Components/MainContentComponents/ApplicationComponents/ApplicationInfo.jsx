import styles from './ApplicationInfo.module.css';

export default function ApplicationInfo() {
  return (
    <div className={styles.applicationContainer}>
      <h3>Application(s)</h3>

      <div>
        <h4>React.js</h4>
        <p>
          React.js is a JavaScript library that is known for its declarative,
          component based approach to creating and building out user interfaces.
        </p>

        <p>
          React allows developers to break down large complex applications into
          smaller re-usable components that are easier to manage.
        </p>

        <p>
          A major advantage for the use of React.js is its virtual DOM, which is
          a light weight representation of the actual DOM.
        </p>

        <p>
          This allows for components on the page to re-render when updated, not the entire web page. This improves overall performance and a better overall user experience.
        </p>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
