import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  return (
    <>
      <Container fluid className="main_blog_wraper">
        <div className="">
          <Row>
            <Col
              lg={6}
              sm={12}
              className="left-side blog_left_col text-center align-items-center"
            >
              <h1 className="hero_heading">Our Blogs</h1>
            </Col>
            <Col lg={6} sm={12} className="right-side">
              <h4 className="hero_sub_heading">
                Diaganose Car Problems If You Don't Know Much About Cars
              </h4>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Hero;
