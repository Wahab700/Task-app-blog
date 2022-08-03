import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const BlogCards = ({ blogs }) => {
  const [loadCards, setLoadCards] = useState(6);

  const handleLoadingCards = () => {
    let cards = loadCards + 6;
    setLoadCards(cards);
  };

  return (
    <section className="blogs-card-wraper">
      <Container>
        <div className="blogs-card-inner">
          <Row>
            {blogs.slice(0, loadCards).map((blog) => (
              <SingleCard {...blog} />
            ))}
          </Row>
          <div className="btn-container mt-5 mb-4 text-center w-100">
            <button className="btn btn-dark" onClick={handleLoadingCards}>
              Load More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogCards;
