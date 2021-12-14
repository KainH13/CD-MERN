import React from "react";

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Boxes = (props) => {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"]

  return (
    <Container>
      <Row className="offset-2">
        {
          colors.map( (color, index) =>
            <div 
            style={{backgroundColor: color, height: "150px"}}
            className="col-3 m-2" 
            key={ index }>
              { color }
            </div>
          )
        }
      </Row>
    </Container>
  );
};

export default Boxes;