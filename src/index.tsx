import './assets/styles.scss';
import {web3, portis} from './services/web3';
import React from 'react';
import { render } from 'react-dom';
import Puppers from 'pages/Puppers';

class App extends React.Component {
  render() {
    return <Puppers />;
  }
}

render(<App />, document.getElementById('app'));
