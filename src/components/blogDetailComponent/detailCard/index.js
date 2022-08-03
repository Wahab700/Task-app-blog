import React from "react";
import { Container } from "react-bootstrap";

const BlogDetailCard = ({ id, Article, Image, Subtitle, Title, views }) => {
  return (
    <div>
      <section className="card-details-wraper">
        <Container className="py-5">
          <div className="top-content wraper">
            <div className="top-row">
              <div className="views">
                <i className="fa fa-eye seen_icon" aria-hidden="true"></i>
                {views} Views
              </div>
            </div>
            <h1 className="main-title">{Title}</h1>
            <h3 className="sub-title">{Subtitle}</h3>
            <div className="bottom-image">
              <img src={Image} alt="img" />
            </div>
            <p className="desc">{Article}</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetailCard;
