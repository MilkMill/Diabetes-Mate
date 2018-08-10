import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import  store from './src/store';

import AppContainer from './src/containers/AppContainer';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View styles={styles.containerView}>
          <AppContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
