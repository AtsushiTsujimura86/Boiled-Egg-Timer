import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import EggSelector from './components/EggSelector'; 
import Egg from './components/Egg';
import Timer from './components/Timer';
import Timer2 from './components/Timer2';


function App() {
    const [selectedMode, setSelectedMode] = useState(null); //選択されたモードのフック
    const handleSelect = (mode) => {
        setSelectedMode(mode);
    }


  return (
    <div className="App">
      <Header />``
      
    <div className='row'>         
        <div className='col-8'>
            <EggSelector onSelect={handleSelect} />
            {/* <Timer /> */}
            <Timer2 />
        </div>
        <div className="col-4">
            <Egg  mode={selectedMode}/>
        </div>
    </div>
    </div>
  );
}

export default App;
