import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

export const Header = () => {
   return (
    <div className="header">
      <Link to="/" className="header__logo-container">
        <Logo className="logo"/>
      </Link>

      <div className="header__options">
        <Link className="header__option" to="/shop">SHOP</Link>
        <Link className="header__option" to="/shop">CONTACT</Link>
      </div>
    </div>
   )
}
