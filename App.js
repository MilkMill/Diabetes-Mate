import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View
     } from 'react-native';

import Header from './src/components/Header/Header'
import Measures from './src/components/Measures/Measures'

class App extends Component {
  render() {
    return(
      <View style={styles.appView}>
        <Header />
        <Measures />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  appView: {
    
  }
})

export default App;