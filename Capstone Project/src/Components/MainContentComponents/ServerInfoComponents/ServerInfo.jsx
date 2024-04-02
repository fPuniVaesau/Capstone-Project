import styles from "./ServerInfo.module.css";

export default function ServerInfo(){
  
  return(
    <div className={styles.serverContainer}>
      <h3>Server(s)</h3>

      <div className={ServerInfo.styles}>
        <p>For this project you are viewing, the server component will be handled using node.js & express.js</p>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.imageItem} src="https://cdn.dribbble.com/users/2520078/screenshots/11988083/media/16914c8400ad518b034fbe8102ba2d4f.gif" alt="server image" />
      </div>
    </div>
  )
}