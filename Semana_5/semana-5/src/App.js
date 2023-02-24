import './App.css';
import FirstComponent from './Components/FirstComponent';
import Props from './Components/Props'
import Greetings from './Components/Greetings'
import Image from './Components/Image';

function App() {
  return (
    <div>
      <FirstComponent />
      <Props nome="Bernardo" sobrenome="Cadore Ramires" />
      <Greetings name="Bernardo" age="27" />
      <Image />
    </div>
  );
}

export default App;