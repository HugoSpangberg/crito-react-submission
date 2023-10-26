import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contacts from './views/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './views/NotFound';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
