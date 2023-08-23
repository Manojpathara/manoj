import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Project from './components/Project';

function App() {
  
  return (
    <div className="App  bg-white dark:bg-[#0f172a] text-black dark:text-white">                                                                                                                                                                                                                                                                                                                                    
     
      <Router >
        <Navbar />
        <Routes>      
        <Route path='/' exact Component={Profile} />
        <Route path='/about' Component={About} />
        <Route path='/projects' Component={Project} />
        </Routes>
       </Router>
      

    </div>
  );
}

export default App;
