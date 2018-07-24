import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class LogBookComponent extends Component {
    static navigationOptions = {
        title: 'Log Book'
    }

    render () {
        const { navigate } = this.props.navigation;
        return(
            <View>
               <Text>Here will be landing Log Book</Text>
            </View>
        )
    }
}

export default LogBookComponent;