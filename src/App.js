import './App.css';
import Home from './components/Home'
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App w-full bg-white dark:bg-[#0f172a] text-black dark:text-white">                                                                                                                                                                                                                                                                                                                                    
     
      <Router >
        <Navbar />
        <Routes>     
        <Route path='/' element={<Home />} />
        <Route path='/about' Component={About} />
        <Route path='/projects' Component={Project} />
        <Route path='/about' Component={Contact} />
        <Route path='*' element={<Navigate to="/" />} />
        </Routes>
       </Router>
      

    </div>
  );
}

export default App;
