import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Card/Card'
import './Style/styles.css'

function App() {
  const CARDS = 10;
  return (
    <div className="App">
      <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card
          key={i}
          title={'Card ' + (i + 1)}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      ))}
    </Carousel>
    </div>
  );
}

export default App;
