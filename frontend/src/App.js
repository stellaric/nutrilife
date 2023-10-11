import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Accueil from './pages/Accueil/Accueil'
import Contact from './pages/Contact/Contact'
import Authentification from './pages/Authentification/Authentification'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="authentification" element={<Authentification/>} />
        
          </Routes>
        </Router>

  );
}

export default App;