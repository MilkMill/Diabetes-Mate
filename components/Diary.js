import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Diary extends React.Component {

    componentDidMount(){
    }
    
    render() {
        return(
            <View style={styles.diary}>
                <Text>А это дневник</Text>
                <Text>{this.props.glucoseInput}</Text>
                </View>
        )
    }
  }
  
  
  const styles = StyleSheet.create ({
  view: {
      borderWidth: 1,
      backgroundColor: 'silver',
      margin: 20,
  },
  glucose: {
      borderWidth: 1,
      borderRadius: 2,
      backgroundColor: 'powderblue'
  },
  diary: {
    borderWidth: 1,
    borderRadius: 2,
  },
  })