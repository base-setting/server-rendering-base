import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './menu.css';

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  };

  return (
    <div className="menu">
      <ul className="menulist">
        <li className="menu-item" ><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li className="menu-item" ><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        <li className="menu-item" ><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
        <li className="menu-item" ><NavLink to="/about/foo/boo?detail=true">About Foo detail</NavLink></li>
        <li className="menu-item" ><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
        <li className="menu-item" ><NavLink to="/users" activeStyle={activeStyle}>Users</NavLink></li>
      </ul>
      <hr/>
    </div>
  );
};

export default Menu;