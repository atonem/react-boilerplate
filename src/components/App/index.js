import React, { Component } from 'react';
import styles from './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    // console.log('styles', styles);
    return <h1 className={styles.test}>project_title</h1>;
  }
}

export default App;
