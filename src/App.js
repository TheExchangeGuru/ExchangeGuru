import React from 'react';
import Sidebar from './component/topbar/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import Home from './component/topbar/pages/home/Home';
import FeaturedInfo from './component/featuredInfo/FeaturedInfo';
import './app.css';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
    
  );
}

export default App;
