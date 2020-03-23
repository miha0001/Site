import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={h.header_container}>
            <div className={h.logo}>
                <span className={h.logo_text}>Logo</span>
            </div>

            <div>

                <div className={h.input_position}>
                    <input className={h.input_settings} type="text" placeholder="Знайти фахівця" />
                    <button className={h.button_settings}></button>
                </div>
            </div>

        </div>
    );
}

export default Header;