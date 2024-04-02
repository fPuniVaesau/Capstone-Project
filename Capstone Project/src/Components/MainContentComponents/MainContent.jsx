import ProfileCard from './ProfileCardComponents/ProfileCard';
import Title from './TitleComponents/Title';
import IntroductionSec from './IntroComponents/IntroductionSec';

import styles from './MainContent.module.css';
export default function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <ProfileCard
          imgUrl={'https://avatars.githubusercontent.com/u/126365920?v=4'}
          firstName={'Filo'}
          lastName={'Vaesau'}
          role={'Digital Craftsman | Developer'}
          location={'San Francisco, Ca'}
          bio={
            '" You will never discover new oceans if you do not have courage to lose sight of the shore. "'
          }
          banner={
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/dfeigs1-0808568b-c170-4e5d-9236-229174397e3f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZGZlaWdzMS0wODA4NTY4Yi1jMTcwLTRlNWQtOTIzNi0yMjkxNzQzOTdlM2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gZqmch91_p9DKvrchO3iLApGU1TyBXthuJCDKqroj0Q'
          }
        />
      </div>

      <div className={styles.two}>
        <Title mainTitle={'Getting to know the Backend!'} />
      </div>

      <IntroductionSec className={styles.test} />
    </div>
  );
}
