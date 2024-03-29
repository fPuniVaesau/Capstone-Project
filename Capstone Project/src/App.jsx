import './styles.css';
import MainHeader from './Components/HeaderComponents/MainHeader';
export default function App() {
  return (
    <>
      <header>
        <MainHeader />
        <nav>
          <ul>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
