import React from 'react';
import f from './Photo.module.css';

const Photo = (props) => {
    return (
        <div className={f.photos}>
            <div>
                <img className={f.main_image} src='http://placehold.it/1280x1024' />
            </div>

            <div className={f.logo_position}>
                <img className={f.logo} src='http://placehold.it/150x150' />
            </div>

            <div className={f.text_container}>
                <p className={f.main_text}>Медичний, оздорочий центр "Благомед"</p>
                <p className={f.secondary_text}>Медичний центр</p>
            </div>
        </div>
    );
}

export default Photo;
