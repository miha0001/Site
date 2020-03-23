import React from 'react';
import d from './Data.module.css';

const Data = () => {
    return (
        <div>
            <div className={d.all_dani}>
                <p className={d.adress}>Адреса:</p>
                <p className={d.street}>пр. Відродження, 13, Луцьк,</p>
                <p className={d.country}>Волинська область, Україна, 43000</p>
                <p className={d.contacts}>Контакти:</p>
                <p className={d.first_number}>+38 (099) 999-99-99</p>
                <p className={d.second_number}>+38 (0332) 77-08-09 </p>
                <p className={d.schedule_job}><span className={d.text_weight}>Графік роботи:</span> ПН-СБ 09:00-20:00</p>
            </div>

            <div className={d.button_position}>
                <a className={d.button} href='#'></a>
            </div>

            <div className={d.secondary_info}>
                <p className={d.reviews}>950 відгуків</p>
                <p className={d.doctors}>120 лікарів</p>
                <p className={d.services}>340 послуг</p>
            </div>

            <div className={d.link_position}>
                <a className={d.link_here} href='#'>Я тут працюю</a>
                <a className={d.link_about} href='#'>Про клініку</a>
                <a className={d.link_photo} href='#'>Фото</a>
            </div>
            <div className={d.gps_position}>
                <a className={d.link_gps} href='#'></a>
            </div>
        </div>
    );
}

export default Data;