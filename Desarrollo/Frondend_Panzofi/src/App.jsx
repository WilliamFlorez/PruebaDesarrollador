import {BrowserRouter , Routes, Route, Navigate} from "react-router-dom";
import {Login} from './pages/login';
import {Usuario} from './pages/UserPage';
import {Admin} from './pages/adminPage';
import {Navigation} from './components/navigation';

function App() {
  return(
      <BrowserRouter>
          <Navigation/>

          <Routes>
            <Route path='/' element={< Navigate to="/login"/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/User' element={<Usuario/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/User/:id' element={<Usuario/>} />
          
          </Routes>
      </BrowserRouter>
  );
  
}

export default App
