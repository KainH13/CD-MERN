import React from "react";

// bootstrap
import Card from "react-bootstrap/Card";

const Content = (props) => {
  const { allContent, currentTabIndex } = props;

  return (
    <Card>
      <Card.Body>
        { allContent[currentTabIndex].content }
      </Card.Body>
    </Card>
  )
}

export default Content;