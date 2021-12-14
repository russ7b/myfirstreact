import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello! Edit <code>src/App.js</code> and save to reload. </p>
        <Employee/>
        <Greet fname="abram" lname="b"/>
        <Greet fname={Hello()} lname="b">
          <Message/>
        </Greet>
        <Button/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
      </header>
    </div>
  );
}

export default App;
