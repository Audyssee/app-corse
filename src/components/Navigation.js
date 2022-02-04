import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                Accueil
            </NavLink>
            <NavLink exact to="/booking" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                Réservation
            </NavLink>
        </div>
    );
};

export default Navigation;