import logo from './logo.svg';
import './App.css';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import NavBar from './components/NavBar.js'
import { useState } from 'react';


function App() {
  const pages = [<About/>, <Projects/>, <Contact/>];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="App">
      <NavBar setCurrentPage = {setCurrentPage} pages = {pages}/>
      {currentPage}
    </div>
  );
}

export default App;
