import './App.css';
import User from './User.js';

function App() {

  function Apple(){
    return(
      <div>Apple Component</div>
    )
  }


  return (
    <div className="App">
      <h1>Hello world</h1>
      <User/>
      <User></User>
      <Apple/>
      {Apple()}
    </div>
  );
}

export default App;
