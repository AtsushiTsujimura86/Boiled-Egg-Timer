import logo from './logo.svg';
import './App.css';
import Egg from './Egg';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Boiled Egg Timer 🥚</h1>
      </header>
      
      <div>
        <h1>Select Mode</h1>
        <button>温泉卵</button>
        <button>半生</button>
        <button>半熟</button>
        <button>完熟</button>
      </div>
      <Egg/>
    </div>
  );
}

export default App;
