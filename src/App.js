import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Tabs from "./Tabs";
import Tab from "./Tab";

function App() {
  return (
    <Tabs>
      <Tab title="Tab 1">Some text 1</Tab>
      <Tab title="Tab 2">Some text 2</Tab>
      <Tab title="Tab 3">Some text 3</Tab>
    </Tabs>
  );
}

export default App;
