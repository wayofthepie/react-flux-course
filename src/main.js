/**
 *
 */
'use strict';
// const $ = require('jquery');
// const jQuery = require('jquery');
import React from "react";

const ReactDOM = require('react-dom');
const Home = require('./components/homePage');
const About = require('./components/about/aboutPage');

class App extends React.Component {
  render() {
    let Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      default:
        Child = Home;
    }

    return (
      <div><Child /></div>
    );
  }
}

function render() {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, document.getElementById('app') )
}

window.addEventListener('hashChange', render);
render();


console.log("FUck")