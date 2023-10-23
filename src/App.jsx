import { useState } from 'react';
import MainBody from './components/mainBody';
import Navigation from './components/navigation';
import './styles/css/App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className='App'>
        <Navigation toggleNavigation={toggleNavigation} isOpen={isOpen} />
        <MainBody isOpen={isOpen} />
      </div>
  );
}

export default App
