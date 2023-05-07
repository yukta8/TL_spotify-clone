
import './App.css';
import Navbar from './components/Navbar';
import First from './components/First'
import Second from './components/Second';
import Third from './components/Third';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      
    <div className="first">
      <First />
    </div>
    <div className="second">
      <Second />
    </div>
    <div className="third">
      <Third />
    </div>
    <div className="fifth">
      <Fifth />
    </div>
    <div className="sixth">
      <Sixth />
    </div>
    </div>
    </>
  );
}

export default App;
