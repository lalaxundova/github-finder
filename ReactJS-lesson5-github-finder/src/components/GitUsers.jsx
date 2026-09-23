import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from "./SingleCard";

const GitUsers = ({ comingusers }) => {
  return (
    <Container>
      <Row className="mt-5 g-4">
        {comingusers.map((item) => (
          <SingleCard
            key={item.id}
            image={item.avatar_url}
            title={item.login}
            url={item.html_url}
            des={item.node_id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default GitUsers