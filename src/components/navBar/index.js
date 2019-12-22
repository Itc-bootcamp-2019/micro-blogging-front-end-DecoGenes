import React from 'react'
import { Link } from "react-router-dom";
import './style.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/' className='homeLink'>Home</Link>
            <Link to='/profile' className='profileLink'>Profile</Link>
        </nav>
    )
}
