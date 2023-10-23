import { useState } from 'react';
import Main from './components/main';
import Navigation from './components/navigation';
import './styles/css/App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className='App'>
        <Navigation toggleNavigation={toggleNavigation} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Main isOpen={isOpen} />
      </div>
  );
}

export default App
