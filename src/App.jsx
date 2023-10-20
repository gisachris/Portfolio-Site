import useState from 'react';
import Navigation from './components/navigation'
import Toggler from './components/shared/toggler';
import './styles/css/App.css'

function App() {
  return (
      <div className="App">
        <Navigation />
        <Toggler />
      </div>
  );
}

export default App
