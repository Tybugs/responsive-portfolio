import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD

ReactDOM.render(
    <App />,
=======
import { ThemeProvider } from './Context';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
>>>>>>> ae03c44c43a760df503c32aea68d3b32b761d6d6
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
