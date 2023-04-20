import React from 'react';
import arrow from './images/arrow-down-circle.svg';

export default function ArrowDown () {
    return (
        <div className='arrow-down-bottom bounce-animation'>
            <img src={arrow} alt="arrow" />
        </div>
    );
}