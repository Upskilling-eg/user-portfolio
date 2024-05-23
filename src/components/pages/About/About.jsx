import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegLightbulb, FaMobileAlt, FaGlobeAfrica, FaDatabase } from "react-icons/fa";

import './About.scss';

const About = () => {
    return (
        <div className='about-bx'>
            <div className='content-bx'>
                <p className='pre-title'>about us</p>
                <h3 className='title'>WHO AM I?</h3>

                <div className='content'>
                    <p className='mb-4'>
                        <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned
                        the Little Blind Text, that where it came from it would have
                        been rewritten a thousand times and everything that was left
                        from its origin would be the word (and) and the Little Blind
                        Text should turn around and return to its own, safe country.
                    </p>
                    <p>
                        Even the all-powerful Pointing has no control about the blind texts it
                        is an almost unorthographic life One day however a small line of blind
                        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                </div>

                <Row>
                    <Col xs={12} md={3}>
                        <div className='about-item graphic'>
                            <div className='icon'><FaRegLightbulb /></div>
                            <h3>Graphic Design</h3>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className='about-item web'>
                            <div className='icon'><FaGlobeAfrica /></div>
                            <h3>Web Design</h3>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className='about-item software'>
                            <div className='icon'><FaDatabase /></div>
                            <h3>Software</h3>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className='about-item application'>
                            <div className='icon'><FaMobileAlt /></div>
                            <h3>Application</h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;
