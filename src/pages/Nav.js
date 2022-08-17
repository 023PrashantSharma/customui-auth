// Nav.js
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link><br />
            <Link to='/profile'>Profile</Link><br />
            <Link to='/protected'>Protected</Link>
        </nav>
    )
}

export default Nav