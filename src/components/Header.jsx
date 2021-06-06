import '../styles/Header.styles.css'

import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
    return (
        <header>
            <Link to='/' className='nav-link'>
                <h2>Popular Nerd Blog</h2>
            </Link>
            <nav>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/blog' className='nav-link'>Blog</Link>
            </nav>
        </header>
    )
}
