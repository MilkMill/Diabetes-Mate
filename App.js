import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    ScrollView
     } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './src/components/Header/Header';
import HomeComponent from './src/components/Home';
import LogBookComponent from './src/components/LogBook';
import DiagramsComponent from './src/components/Diagrams';
import AnalyticsComponent from './src/components/Analytics';

const App = StackNavigator ({
  Home: {
    screen: HomeComponent,
  },
  LogBook: {
    screen: LogBookComponent
  },
  Diagrams: {
    screen: DiagramsComponent
  },
  Analytics: {
    screen: AnalyticsComponent
  }

});

const styles = StyleSheet.create({
  appView: {
    
  }
})

export default App;