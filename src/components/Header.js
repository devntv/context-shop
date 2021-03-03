import React, { useState, useContext } from 'react'
import Menu from './picsvg/bars-solid.svg'
import Close from './picsvg/arrow-circle-left-solid.svg'
import Cart from './picsvg/cart.svg'
import { Link } from 'react-router-dom'
import {DataContext} from './DataContext/DataProvider'
import './Header.css'
const Header = () => {

    const [menu, setMenu] = useState(false)

    const value = useContext(DataContext)
    const [carts] = value.carts

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="menu" width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/">SimpleShop</Link></h1>
            </div>

            <ul style={styleMenu}>
                <li><Link onClick={toggleMenu} to="/">Home</Link></li>
                <li><Link onClick={toggleMenu} to="/products">Products</Link></li>
                <li><Link onClick={toggleMenu} to="/about">About</Link></li>
                <li><Link onClick={toggleMenu} to="">New/Fashion</Link></li>
                <li>
                    <img src={Close} alt="close" width="30" className="menu" onClick={toggleMenu} />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{carts.length}</span>
                <Link to="/carts">
                    <img src={Cart} alt="cart" width="30" />
                </Link>
            </div>

        </header>
    )
}

export default Header
