import React from 'react';
// import { detect } from 'detect-browser';
import { render } from 'react-dom';
// import Assistant from './assistant';
import App from './App';

// const browser = detect();
//
// if (browser && browser.name === 'chrome') {
//   const assistant = new Assistant({
//     skills: [
//       require('./skills/time'),
//       require('./skills/schedule'),
//     ],
//   });
//   assistant.start();
// }

render(<App />, document.getElementById('app'));
