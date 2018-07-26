import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
     } from 'react-native';

import HomeInput from './Input'


class HomeComponent extends Component{


    render(){
        return(
            <ScrollView>
                <View style={styles.globalView}>

                    


                    <HomeInput 
                        glucPlace = 'Enter your glucose here'
                        xePlace = 'Enter your bread units here'
                        insulinPlace='Enter your injection value here'
                    />
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    globalView: {

    },

    navButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    navTouchable: {
        marginBottom: 10,
        padding: 5,
        borderBottomWidth: 1,
    },
    navTouchableText: {
        fontSize: 20,

    }
    
})

export default HomeComponent;