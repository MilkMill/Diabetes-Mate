import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput
     } from 'react-native';

import Input from './Input'

class Measures extends Component{
    state = {

    }

    render(){
        return(
            <View>
                <Input 
                    glucPlace = 'Enter your glucose here'
                    xePlace = 'Enter your XE here'
                    insulinPlace='Enter your injection value'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    glucose: {
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
    }
})

export default Measures;