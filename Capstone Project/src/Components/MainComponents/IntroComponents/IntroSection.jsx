import styles from "./IntroSection.module.css"
export default function IntroSection(){
    return(
        <div className={styles.introContainer}>
            <h2 className={styles.title}>Intro</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente possimus rem odio quia minus nulla dolor temporibus commodi nostrum. Odio cupiditate optio temporibus ullam magni minima necessitatibus adipisci fugit architecto, facilis officia deleniti atque sed magnam eius dolorem hic sunt modi aperiam cumque dolores. Illum, quod modi. Quas, molestiae?</p>
            </div>
        </div>
    )
}