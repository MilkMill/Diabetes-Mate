import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    ScrollView
     } from 'react-native';

import Header from './src/components/Header/Header';
import HomeComponent from './src/components/Home';
import LogBookComponent from './src/components/LogBook';
import DiagramsComponent from './src/components/Diagrams';
import AnalyticsComponent from './src/components/Analytics';

class App extends Component {
  render(){
    return(
      <ScrollView>
      <View style={styles.appView}>
        
        <Header />
        
        <View style={styles.modalsView}>
          <LogBookComponent />
          <DiagramsComponent />
          <AnalyticsComponent />
        </View>

        <HomeComponent />
        

        </View>
        </ScrollView>

    )
  }

};

const styles = StyleSheet.create({
  appView: {
    backgroundColor: "#087078"
  },
  modalsView: {
    
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 20,

  }
})

export default App;