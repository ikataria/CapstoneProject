import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import Menu from './components/pages/menu';
import { AuthWrapper } from './auth/AuthWrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Menu /> */}
        <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
