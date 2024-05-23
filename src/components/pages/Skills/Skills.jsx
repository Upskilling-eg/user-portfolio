import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.scss';

const Skills = () => {
    const photoshopNow = 75;
    const jqueryNow = 60;
    const htmlNow = 85;
    const cssNow = 90;
    const wordpressNow = 70;
    const seoNow = 80;

    return (
        <div className='skills-bx'>
            <div className='content-bx'>
                <p className='pre-title'>MY SPECIALTY</p>
                <h3 className='title'>MY SKILLS</h3>

                <div className='content'>
                    <p className='mb-4'>
                        The Big Oxmox advised her not to do so, because there were thousands
                        of bad Commas, wild Question Marks and devious Semikoli, but the
                        Little Blind Text didn't listen. She packed her seven versalia, put her
                        initial into the belt and made herself on the way.
                    </p>
                </div>

                <Row>
                    <Col xs={12} md={6}>
                        <div className='progress-bar-item photoshop'>
                            <h3>Photoshop</h3>
                            <span className='num'>{`${photoshopNow}%`}</span>
                            <ProgressBar className='item-progress-bar' now={photoshopNow} />
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className='progress-bar-item jquery'>
                            <h3>jQuery</h3>
                            <span className='num'>{`${jqueryNow}%`}</span>
                            <ProgressBar className='item-progress-bar' now={jqueryNow} />
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className='progress-bar-item html'>
                            <h3>HTML5</h3>
                            <span className='num'>{`${htmlNow}%`}</span>
                            <ProgressBar className='item-progress-bar' now={htmlNow} />
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className='progress-bar-item css'>
                            <h3>CSS3</h3>
                            <span className='num'>{`${cssNow}%`}</span>
                            <ProgressBar className='item-progress-bar' now={cssNow} />
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className='progress-bar-item wordpress'>
                            <h3>WordPress</h3>
                            <span className='num'>{`${wordpressNow}%`}</span>
                            <ProgressBar className='item-progress-bar' now={wordpressNow} />
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className='progress-bar-item seo'>
                            <h3>SEO</h3>
                            <span className='num'>{`${seoNow}%`}</span>
                            <ProgressBar className='item-progress-bar' now={seoNow} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Skills;
