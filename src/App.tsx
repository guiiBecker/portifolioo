
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='/about' element={<About />} />
        
        
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
