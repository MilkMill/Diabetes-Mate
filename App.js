import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    ScrollView
     } from 'react-native';

import Header from './src/components/Header/Header';
import HomeComponent from './src/components/Home';


class App extends Component {
  render(){
    return(
      <ScrollView>
      <View style={styles.appView}>
        
        <Header />
  
        <HomeComponent />
        
        </View>
        </ScrollView>

    )
  }

};

const styles = StyleSheet.create({
  appView: {
    backgroundColor: "#087078"
  }
})

export default App;