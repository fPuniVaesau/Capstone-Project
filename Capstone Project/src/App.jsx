import './styles.css';
import ProfileCard from './Components/ProfileCardComponents/ProfileCard';
function App() {
  return (
    <>
      <ProfileCard
        profilePic={"https://images.unsplash.com/photo-1703533136832-2e91ef1a746f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"}
        name='Filo Puni Vaesau'
        role={'Digital Craftsman | Full Stack Developer'}
        bio={'"You shall, I question not, find a way to the top if you diligently seek for it; for nature hath placed nothing so high that it is out of the reach of industry and valor. -Alexander The Great"'}
        CardBanner={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/19c68006-1bb3-4971-94b5-97446e0b1755/dfsbwos-fe07721a-16b7-4bd4-9020-a892afb44528.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5YzY4MDA2LTFiYjMtNDk3MS05NGI1LTk3NDQ2ZTBiMTc1NVwvZGZzYndvcy1mZTA3NzIxYS0xNmI3LTRiZDQtOTAyMC1hODkyYWZiNDQ1MjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H77rDwB9UX7przh9JIyyuKpE5u7VVHnUKhteeMtEI44"}
      />
    </>
  );
}

export default App;
