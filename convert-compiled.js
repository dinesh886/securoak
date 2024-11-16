"use strict";

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {
  convertToHtml
} = require('react-html-converter');

// Example React component
const MyComponent = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, World!"), /*#__PURE__*/React.createElement("p", null, "This is a React component converted to HTML and CSS."));

// Convert the React component to HTML and CSS
const html = convertToHtml(/*#__PURE__*/React.createElement(MyComponent, null));
console.log(html);
