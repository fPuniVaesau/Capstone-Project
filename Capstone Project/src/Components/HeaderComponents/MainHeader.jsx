import NavBarLogo from './NavBarLogoComp/NavBarLogo';
import NavBarList from './NavBarList/NavBarList';
import styles from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.container}>
      <NavBarLogo
        imgUrl={
          'https://www.pngall.com/wp-content/uploads/15/Snorlax-PNG-Cutout.png'
        }
        altDiscription={'Snorlax Placeholder Logo'}
      />
      <NavBarList liOne={'About'} liTwo={'Projects'} liThree={'About'} />
    </header>
  );
}
