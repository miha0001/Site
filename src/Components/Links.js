import React from 'react';
import h from './Links.module.css';
import { NavLink } from 'react-router-dom';

const Links = () => {
    return (
        <div className={h.all_links}>
            <div><NavLink to='#' >Українська</NavLink><i className={h.test}></i></div>
            <div className={h.sign_link}><NavLink to='#' >Увійти</NavLink></div>
            <div><NavLink to='#' >МЕНЮ</NavLink></div>
        </div>

    );
}

export default Links;