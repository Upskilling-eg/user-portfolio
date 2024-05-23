import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaDownload, FaBriefcase } from "react-icons/fa";
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-bx'>
            <Carousel fade controls={false} indicators={false} pause={false}>
                <Carousel.Item className='slide-1'>
                    <div className='content'>
                        <h1>Hi! <br /> Im Jackson</h1>
                        <p>100% html5 bootstrap templates Made <br /> By <Link to=''>Colorlib.com</Link></p>
                        <span className='download-btn'>
                            download cv <FaDownload />
                        </span>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='slide-2'>
                    <div className='content'>
                        <h1>I am <br /> a Designer</h1>
                        <p>100% html5 bootstrap templates Made <br /> By <Link to=''>Colorlib.com</Link></p>
                        <span className='download-btn'>
                            VIEW PORTFOLIO  <FaBriefcase />
                        </span>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='content-bx'></div>
        </div>
    );
}

export default Home;
