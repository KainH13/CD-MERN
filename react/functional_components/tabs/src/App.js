import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Content from './components/Content';
import './App.css';

function App() {

  const contentArray = [
    {label: "Tab 1", content: "Tab 1 content shows here."},
    {label: "Tab 2", content: "Tab 2 content shows here."},
    {label: "Tab 3", content: "Tab 3 content shows here."},
    {label: "Tab 4", content: "Tab 4 content shows here."},
  ]

  const [ allContent, setAllContent ] = useState(contentArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs 
        allContent = { allContent }
        currentTabIndex = { currentTabIndex }
        setCurrentTabIndex = { setCurrentTabIndex }
      />
      <Content 
        allContent = { allContent }
        currentTabIndex = { currentTabIndex }
      />
    </div>
  );
}

export default App;
