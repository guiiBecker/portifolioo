
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projetos from './pages/projetos';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='/about' element={<About />} />
         <Route path='/projetos' element = {<Projetos />} />
        
        
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
