import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';

function Home() {
  return (
    <div className = "App">
      <header className="App-header">
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <Greet fname="russ" lname="7b">
          <Message/>
        </Greet>
        <br/>
        <Hello/>
        <Button/>
        <br/>
      </header>
    </div>
  );
}

export default Home;