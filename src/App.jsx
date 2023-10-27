import { useState } from 'react';
import MainBody from './components/mainBody';
import Navigation from './components/navigation';
import Toggler from '../src/components/shared/toggler';
import PopUpMessage from '../src/components/shared/message';
import PopupContext from './contexts/popupContext';
import './styles/css/App.css';

function App() {
  // navigation state
  const [isOpen, setIsOpen] = useState(false); 
  
  // popups state
  const [popupShow, setPopupShow] = useState({
    status: false,
    message: null,
    pass: false,
  });

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className='App'>
        <Navigation toggleNavigation={toggleNavigation} isOpen={isOpen} />
        <PopupContext.Provider value={{popupShow, setPopupShow}}>
          <MainBody isOpen={isOpen} />
          <PopUpMessage />
          <Toggler />
        </PopupContext.Provider>
      </div>
  );
}

export default App
