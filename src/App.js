import logo from './logo.svg';
import './App.css';

function App() {

  const getRandom = (number) => {
    return Math.floor((Math.random() * number) +1);
  }
// diceroll(6) --> random category 1 
 /// food
// diceroll(10) per category  = total items avaiable per category
  /// 5 items avaialbe
// diceroll(100) per item = select item from list of 20.. if repeated, roll again.
 /// food item 1, food item 2, food item 3, food item 4, food item 5, ( no repeats)

 // repeat all previous, but for category 2. (cannot be food.)

  getRandom(100);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing
        </a>
      </header>
    </div>
  );
}

export default App;
