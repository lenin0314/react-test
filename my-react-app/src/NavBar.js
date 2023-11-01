import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ 
      backgroundColor: '#007BFF', 
      padding: '2px', 
      position: 'fixed', 
      bottom: 35, 
      left: '25%',
      width: '50%',
      zIndex: 100,
      borderRadius: '10px 10px 0 0',
      boxShadow: '0px -2px 10px rgba(0,0,0,0.15)'
    }}>
      <ul style={{ 
        listStyleType: 'none', 
        display: 'flex', 
        justifyContent: 'space-around' 
      }}>
        <li>
          <Link to="/GetUsers" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Show Users</Link>
        </li>
        <li>
          <Link to="/GetPosts" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Get Posts & Comments</Link>
        </li>
        <li>
          <Link to="/ParentChart" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Show Chart</Link>
        </li>
        <li>
          <Link to="/MapComponent" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Show Map</Link>
        </li>
   
      </ul>
    </nav>
  );
};

export default NavBar;