import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleCard = ({ id, Article, Image, Subtitle, Title }) => {
  const { views } = useSelector((state) => state.views);

  const viewCount = views.find((item) => item.id === id)?.value || 0;

  return (
    <Col lg={4} md={6} sm={12} className="single-card">
      <Link to={`/blog/${id}`}>
        <div className="top-img">
          <img src={Image} alt={Title} />
        </div>
        <div className="bottom-content">
          <div className="top-row">
            <div className="date">Posted on October 6th 2021</div>
            <div className="views">
              <i className="fa fa-eye" aria-hidden="true"></i>
              {viewCount} Views
            </div>
          </div>
          <h2 className="title-main">{Title}</h2>
          <h3 className="sub-title">{Subtitle.slice(0, 150)}</h3>
          {/* <p className="desc">{Article}</p> */}
        </div>
      </Link>
    </Col>
  );
};

export default SingleCard;
