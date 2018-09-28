import React, { Component } from 'react';
//RHL only for front end development
import { detect } from 'detect-browser';
import Logo from './logo.svg';

const browser = detect();

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="Content">
          <Logo className="App-logo" alt="logo" />
          <h2>
            { (!browser || browser.name !== 'chrome')
              ? 'Uh - Oh'
              : ''
            }
          </h2>
          <p className="Subtitle">
            { (!browser || browser.name !== 'chrome')
              ? 'You need Chrome to use this website!'
              : ''
            }
          </p>
        </div>
      </div>
    );
  }
}

export default App;
