import React from "react";

// bootstrap
import Nav from "react-bootstrap/Nav";

const Tabs = (props) => {
  const { allContent, currentTabIndex, setCurrentTabIndex } = props;

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
  }

  return (
    <div>
      <Nav variant="tabs">
        {allContent.map((item, index) => (
          <Nav.Item>
            <Nav.Link onClick={(e) => setSelectedTab(index)}>{ item.label }</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Tabs;