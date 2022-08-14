import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Topbar from './components/Topbar/Topbar';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
