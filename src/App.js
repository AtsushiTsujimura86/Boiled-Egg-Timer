import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import EggSelector from './components/EggSelector';
import Egg from './components/Egg';


function App() {
    const [selectedMode, setSelectedMode] = useState(null); //選択されたモードのフック
    const handleSelect = (mode) => {
        setSelectedMode(mode);
    }


  return (
    <div className="App">
      <header>
        <h1>Boiled Egg Timer 🥚</h1>
      </header>
      
      <div>
        <h1>Select Mode</h1>
        <EggSelector onSelect={handleSelect}/>
        </div>
      <Egg  mode={selectedMode}/>
    </div>
  );
}

export default App;
