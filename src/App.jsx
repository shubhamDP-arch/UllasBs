import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home';
import TravelForm from './pages/TravelForm';
import TransportCards from './pages/Card';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes> {/* Use Routes component instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element instead of component */}
        <Route path='/destinations' element={<TravelForm/>}/>
        <Route path='/card' element={<TransportCards/>}/>
      </Routes>
    </Router>
  );
}

export default App;
