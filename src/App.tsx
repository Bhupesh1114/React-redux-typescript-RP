import {useState} from 'react';
import Todolist from './components/Todolist/Todolist';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';


function App() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/:id" element={<Details />}/>
      </Routes>

   {/* <Button label="Click me" onClick={handleClick} count={count}/> */}
    </div>
  );
}

export default App;
