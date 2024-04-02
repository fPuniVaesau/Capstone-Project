import BACTitle from "./BACTitleComponents/BACTitle";
import styles from "./BackendArchitecture.module.css"

export default function BackendArchitecture(){

  return(
    <div className={styles.BACcontainer}>
      <BACTitle Title={"3 Main Components"} />

      <div>
        <p>When it comes to designing web applications, there are 3 things you must consider...</p>

        <ul>

        </ul>
      </div>
    </div>
  )
}