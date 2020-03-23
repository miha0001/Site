import React from 'react';
import f from './Footer.module.css';

const Footer = () => {
    return (
        <div className={f.main_container}>

            <div className={f.text_position}>

                <p className={f.conpany}>Компанія</p>
                <a href='#'>Про нас</a>
                <a href='#'>Новини</a>
                <a href='#'>Довідковий центр</a  >

            </div>

            <div className={f.contacts_container}>

                <p className={f.contacts}>Контакти</p>
                <p className={f.mail}>moehealthmapsapi@gmail.com</p>
                <a className={f.link} href='#'></a>
                <a className={f.link} href='#'></a>
                <a className={f.link} href='#'></a>
            </div>

            <div className={f.input_position}>
                <p className={f.subscribe}>Підписатися на розсилку</p>
                <input className={f.input_control} type='text' placeholder='Введіть вашу пошту' />
                <button className={f.btn}></button>
            </div>

            <div className={f.lang_position}>
                <select>
                    <option value='1'>Українська</option>
                    <option value='2'>English</option>
                    <option value='3'>Spain</option>
                </select>
            </div>

            <div className={f.secondary_information}>
                <img src='http://placehold.it/55x55' />
                <span className={f.foot_txt}>2019 <span className={f.m_heal}>MoniHeal.</span> Medical OnlineInformation System</span>
                <div className={f.link_position}>
                    <a href='#'>Захист даних</a>
                    <a href='#'>Політика приватності</a>
                    <a href='#'>Правила користування</a>
                </div>
            </div>

        </div>
    );
}

export default Footer;