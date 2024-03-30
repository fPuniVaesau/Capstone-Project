import styles from "./IntroductionSec.module.css"

export default function IntroductionSec() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <h3>What is Backend Development?</h3>
      <hr />
      <p>
        When we use the web and access webpages and applications we are greeted
        with beautiful layouts, fonts, colors, animations and more. All the hard
        work that the developers had done is presented to us in a beautiful
        package.
      </p>

      <p>
        When we press buttons on the page, they do something, when we are
        signing up for memberships or filling out a form, does something.
        Whenever we interact with the web page, it does something. But what is
        that something and how does it work?
      </p>

      <p>
        Where does that information that I provided for that form go? Why is
        information on a page being displayed when I press this button? These
        are some of the questions that I asked when starting my journey into web
        development.
      </p>

      <p>
        If these are questions you are struggling with as well, then this is the
        place for you.
      </p>

      <p>👋🏽 Welcome to learning about the Backend!</p>
      </div>
      

      {/* <div className={styles.imgContainer}>
        <img className={styles.introIllustration} src="https://miro.medium.com/v2/resize:fit:1358/1*yw0TnheAGN-LPneDaTlaxw.gif" alt="fullstack development" />
      </div> */}
    </div>
  );
}
