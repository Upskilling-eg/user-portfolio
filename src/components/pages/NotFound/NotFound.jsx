import React from 'react';
import IMAGES from '../../../assets/images/Images';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='notfound-bx'>
            <img src={IMAGES.notFoundPic} alt='pic' />
        </div>
    );
}

export default NotFound;
