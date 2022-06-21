import React from 'react'
import logo from '../Header/favourite.png'
import logo1 from '../Header/LOGO.jpg'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-logo">
                <img className="header-logo__image" src={logo1} alt="" />
            </div>
            <div className="header-nav">
                <Link className="header-nav__navigation" to="/">Home</Link>
                <Link className="header-nav__navigation" to="/post">Post</Link>
                <Link className="header-nav__navigation" to="/reviews">Reviews</Link>
                <Link className="header-nav__navigation" to="/contacts">Contacts</Link>
                <Link className="header-nav__navigation" to="/dialogs">Dialogs</Link>
                <Link className="header-nav__navigation" to="/users">Users</Link>
            </div>
            
            <div className="header-favourites">
                <img className="favourites" src={logo} alt="" />
                <div className="counter-radius">
                    
                </div>
            </div>
            {/* <Nav nav={props.data.nav}/> */}
        </header>
    )
}

// const Nav = (props) => {
//     const data = props.nav
//     const test = data.map(el => <h1 key={el.link}>{el.link} {el.text}</h1>)
//     return (
//         <div className="wrapper">
//             {test}
//         </div>
//     )
// }


export default Header