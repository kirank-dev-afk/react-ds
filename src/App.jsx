
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    
      
    </>
  )
}

export default App
