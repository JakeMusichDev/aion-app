import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BG from '../assets/bg_1.svg';

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <h1>AION</h1>
        
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundImage: `url(${BG})`,
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat"
  }
});

export default App;
