import React from 'react';
import {
Link
} from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
        <header>
        <ul>
            <li><Link itemProp ="url" to="">Homepage</Link></li>
            <li><Link itemProp ="url" to="about">About</Link></li>
            <li><Link itemProp ="url" to="login">Login</Link></li>
            <li><Link itemProp="url" to="contact">Contact</Link> </li>
            <a className="skip-link" href="#content" tabindex="1">Skip to content</a>
            
        </ul>
        </header>
    </nav>  );
}
export default Menu;
