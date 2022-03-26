import './App.css';
import Answer from './Components/Answer/Answer';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Answer></Answer>
    </div>
  );
}

export default App;
