import './App.css';
import { Boxworks } from './Components/Boxworks';
import { Navbar } from './Components/Navbar';
import { Text } from './Components/Text';

function App() {
  return (
    <div>

      <Navbar />

      <div>
        <Text/>
      </div>

    

    <div className='gridWorks'>
      
        <Boxworks />

        <Boxworks />

        <Boxworks />

        <Boxworks />

        <Boxworks />

        <Boxworks />
    </div>



    </div>
  );
}

export default App;
