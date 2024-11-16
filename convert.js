import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { convertToHtml } from 'react-html-converter';

// Example React component
const MyComponent = () => (
  <div>
    <h1>Hello, World!</h1>
    <p>This is a React component converted to HTML and CSS.</p>
  </div>
);

// Convert the React component to HTML
const html = ReactDOMServer.renderToStaticMarkup(<MyComponent />);

// Optionally, you can use convertToHtml for additional conversion features
const htmlWithCss = convertToHtml(<MyComponent />);

// Save HTML and CSS to files or use as needed
console.log(html);
console.log(htmlWithCss);
