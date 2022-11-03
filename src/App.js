import NavBar from "./components/NavBar/NavBar";
import HeroCard from "./components/Hero/HeroCard";
import logo from './Assets/Avatar.png';
import dish from './Assets/foodDish.jpg';

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
      <div className="container d-flex f-wrap">
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
        <HeroCard avatar={logo} logo={dish} />
      </div>
    </div>
  );
}

export default App;
