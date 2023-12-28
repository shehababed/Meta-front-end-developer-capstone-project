import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    const [click, setclick] = useState(false)
    const handleclick = () => setclick(!click);

    return (
        <nav className="navbar">
            <a href="/">
            <img src={logo} alt="Logo"/>
            </a>
            {/* Navbar items */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Menu</Link>
                </li>
                <li>
                    <Link to="/">Reservation</Link>
                </li>
                <li>
                    <Link to="/">Order Online</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleclick}>
                <span class={!click? "bar1" : "bar1 active1"}></span>
                <span class={!click? "bar2" : "bar2 active2"}></span>
                <span class={!click? "bar3" : "bar3 active3"}></span>
            </div>
        </nav>
    )
}

export default Nav;