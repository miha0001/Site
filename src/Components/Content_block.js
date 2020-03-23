import React from 'react';
import c from './Content.module.css';

const Content_block = (props) => {
    return (
        <div className={c.item}>
            <div className={c.main_links}>
                <a className={c.link_one} href='#'></a>
                <p className={c.reiting}><span className={c.p3}>4,9</span> <br /><span className={c.s_p3}>Рейтинг</span></p>
                <a className={c.link_two} href='#'></a>
                <p className={c.reviews}><span className={c.p4}>123</span> <br /><span className={c.s_p4}>Відгуків</span></p>
                <a className={c.link_three} href='#'></a>
                <p className={c.services}><span className={c.p5}>{props.pos}</span> <br /><span className={c.s_p5}>Послуг</span></p>
            </div>
            <img className={c.photo} src='http://placehold.it/75x75' />
            <p className={c.status}></p>
            <p className={c.status_info}>{props.stat}</p>
            <h4 className={c.doctors_name}>{props.name}<br />{props.surname}</h4>
            <p className={c.profession_info}>Інфекціоніст, Лікар-нарколог<br />дільничий{props.more}</p>
            <p className={c.adress}>м. Луцьк, пр. Соборності 89, каб. {props.kab} </p>
        </div>

    );
}

export default Content_block;







