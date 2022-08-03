import React from 'react'
import { Container, Row, Col, NavLink } from 'react-bootstrap'

const Featured = () => {
    return (
        <>
            <Container fluid className='main_featured_wraper'>

                <Container>
                    <Row>
                        <Col lg={4} sm={12} className='left-side'>
                            <img src='/images/featured-left.png' alt='img' />
                        </Col>
                        <Col lg={8} sm={12} className='right-side'>
                            <div className="top-row">
                                <div className="left-side">
                                    <p className="create-date">Posted on October 6th 2021</p>
                                    <p className="views">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                        563 Views
                                    </p>
                                </div>
                                <div className="right-side">
                                    <p className="box-title">Featured</p>
                                </div>
                            </div>
                            <h1 className="title-feature">Should I Buy a New Car or Lease a New Car in 2021?</h1>
                            <p className="desc">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
                            <NavLink to='/#'>Read More &rarr;</NavLink>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    )
}

export default Featured