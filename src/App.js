import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import Homepage from './components/Homepage/Homepage.js';
import Matchpage from './components/Matchpage/Matchpage.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Matchpage/>
    </div>
  );
}

export default App;
