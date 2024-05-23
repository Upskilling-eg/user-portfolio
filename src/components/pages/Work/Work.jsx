import React, { useState } from 'react';
import './Work.scss';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaRegEye, FaRegHeart } from "react-icons/fa";
import { collectionData } from './collection';

const Work = () => {

    // active class
    const [activeButton, setActiveButton] = useState(0);
    const handleClick = (index) => {
        setActiveButton(index);
    };

    // filter
    const [category, setCategory] = useState(collectionData);
    const handleBtns = (e) => {
        let word = e.target.value;

        if (word === "All") {
            setCategory(collectionData)
        }
        else if (word === "Graphic") {
            const filtered = collectionData.filter(item => item.kind === "catug1");
            setCategory(filtered)
        }
        else if (word === "Apps") {
            const filtered = collectionData.filter(item => item.kind === "catug2");
            setCategory(filtered)
        }
        else if (word === "Software") {
            const filtered = collectionData.filter(item => item.kind === "catug3");
            setCategory(filtered)
        }
    }

    return (
        <div className='work-bx'>
            <div className='content-bx'>
                <p className='pre-title'>MY WORK</p>
                <h3 className='title'>RECENT WORK</h3>

                <div className='filter-btns'>
                    <div
                        className={activeButton === 0 ? 'active' : ''}
                        onClick={() => handleClick(0)}
                    >
                        <button value="All" onClick={handleBtns}>All</button>
                    </div>
                    <div
                        className={activeButton === 1 ? 'active' : ''}
                        onClick={() => handleClick(1)}
                    >
                        <button value="Graphic" onClick={handleBtns}>Graphic Design</button>
                    </div>
                    <div
                        className={activeButton === 2 ? 'active' : ''}
                        onClick={() => handleClick(2)}
                    >
                        <button value="Apps" onClick={handleBtns}>Apps</button>
                    </div>
                    <div
                        className={activeButton === 3 ? 'active' : ''}
                        onClick={() => handleClick(3)}
                    >
                        <button value="Software" onClick={handleBtns}>Software</button>
                    </div>
                </div>

                <div className='filter-items'>
                    <Row>
                        {category.map((item) => (
                            <Col xs={12} md={6} key={item.id}>
                                <div className={`item ${item.class}`}>
                                    <div className='overlay-bx'>
                                        <div>
                                            <Link to=''>item name</Link>
                                            <p className='catug'>{item.catugName}</p>
                                        </div>
                                        <div className='actions'>
                                            <span><FaShareAlt /></span>
                                            <span><FaRegEye /> 100</span>
                                            <span><FaRegHeart /></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Work;
