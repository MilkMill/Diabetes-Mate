import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DiagramsComponent extends Component {
    static navigationOptions = {
        title: 'D I A G R A M S'
    }

    render () {
        const { navigate } = this.props.navigation;
        return(
            <View>
               <Text>Here will be D I A G R A M S  and G R A P H S</Text>
            </View>
        )
    }
}

export default DiagramsComponent;