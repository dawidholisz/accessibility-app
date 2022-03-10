import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000,undefined,undefined,results=>{
    const {violations} = results
    violations.forEach(({ description,id,impact,help,helpUrl,nodes=[] })=>{
      nodes.forEach(({ target })=>{
        const element = document.querySelector(target)
        console.log(id,description,help,helpUrl,impact,element)
        element.style.background="hotpink"

      })
    })
  });
}
//declare function reactAxe(_React: typeof React, _ReactDOM: typeof ReactDOM, _timeout: number, _conf?: ReactSpec, _context?: axeCore.ElementContext, _logger?: (results: axeCore.AxeResults) => void): Promise<void>;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
