import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import List from './components/List/List';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/counter'} element={<Counter />} />
          <Route path={'/form'} element={<Form />} />
          <Route path={'/list'} element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
