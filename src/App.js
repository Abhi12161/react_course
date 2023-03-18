import logo from './logo.svg';
import './App.css';
import Great from './compoonents/Great';
import Welcome from './compoonents/Welcome';
import Helo from './compoonents/Hello';
import Counter from './compoonents/Counter';

function App() {
  return (
    <div className="App">

   <Counter />
   
       {/* <Welcome /> */}
      {/* <Helo /> */}
      {/* <Great name='abhimanyu' >
        <p>i am a software developer</p>
      </Great>
      <Great  name='suraj'/>
      <Great  name='DIana'/>
      <Welcome name='clark' /> */}
    </div>
  );
}

export default App;
