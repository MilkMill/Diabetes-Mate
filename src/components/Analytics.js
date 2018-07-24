import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class AnalyticsComponent extends Component {
    static navigationOptions = {
        title: 'A N A L Y T I C S'
    }

    render () {
        const { navigate } = this.props.navigation;
        return(
            <View>
               <Text>Here will be stand Analytics Table</Text>
            </View>
        )
    }
}

export default AnalyticsComponent;