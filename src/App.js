import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx"; 
import Home from "./components/home/Home"; 
import About from "./components/about/About"; 
import Services from "./components/services/Services"; 
import Resume from "./components/resume/Resume"; 
import Portfolio from "./components/portfolio/Portfolio"; 
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

const App = () => {
    return (
        <> 
            <Sidebar />
            <main className='main'>
                <Home />
                <Services />
                <About />
                <Portfolio />
                <Blog />
                <Resume />
            </main>
        <> 
    )
}

export default App