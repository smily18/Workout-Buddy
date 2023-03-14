import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

export const URL = process.env.REACT_APP_URL;

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

