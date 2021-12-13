import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
    const activeStyle = {
        color: 'gray',
        borderBottom: '1px solid whitesmoke'
    };
    return (
        <nav className={styles.navBar}>
            <NavLink to='/'>
                <img className={styles.image} src='/logo192.png' alt='Logo'/>
            </NavLink>
            <NavLink style={({isActive} )=> isActive ? activeStyle : null} className={styles.nav} to='/'>Home</NavLink>
            <NavLink style={({isActive} )=> isActive ? activeStyle : null} className={styles.nav} to='/exemples'>Exemples</NavLink>
            <NavLink style={({isActive} )=> isActive ? activeStyle : null} className={styles.nav} to='/about'>About</NavLink>
            <NavLink style={({isActive} )=> isActive ? activeStyle : null} className={styles.nav} to='/got'>GOT</NavLink>
            <NavLink style={({isActive} )=> isActive ? activeStyle : null} className={styles.nav} to='/joke'>Jokes</NavLink>
        </nav>
    )
}
