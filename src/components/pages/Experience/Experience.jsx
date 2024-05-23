import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import './Experience.scss';

const Experience = () => {
    return (
        <div className='experience-bx'>
            <div className='content-bx'>
                <p className='pre-title'>EXPERIENCE</p>
                <h3 className='title'>WORK EXPERIENCE</h3>

                <div className='timeline-bx'>
                    <div className='timeline-item'>
                        <div className='timeline-icon blue'><FaPencilAlt /></div>
                        <div className='item-title'>
                            Full Stack Developer <span>2017-2018</span>
                        </div>
                        <div className='text'>
                            Tolerably earnestly middleton extremely distrusts she boy now not.
                            Add and offered prepare how cordial two promise. Greatly who affixed
                            suppose but enquire compact prepare all put. Added forth chief trees
                            but rooms think may.
                        </div>
                    </div>

                    <div className='timeline-item'>
                        <div className='timeline-icon red'><FaPencilAlt /></div>
                        <div className='item-title'>
                            Front End Developer at Google Company <span>2017-2018</span>
                        </div>
                        <div className='text'>
                            Even the all-powerful Pointing has no control about the blind texts it is
                            an almost unorthographic life One day however a small line of blind text
                            by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                        </div>
                    </div>

                    <div className='timeline-item'>
                        <div className='timeline-icon orange'><FaPencilAlt /></div>
                        <div className='item-title'>
                            System Analyst <span>2017-2018</span>
                        </div>
                        <div className='text'>
                            Even the all-powerful Pointing has no control about the blind texts it is
                            an almost unorthographic life One day however a small line of blind text
                            by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Experience;
