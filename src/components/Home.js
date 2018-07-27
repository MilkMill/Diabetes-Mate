import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
     } from 'react-native';

import Input from './Input'

class HomeComponent extends Component{


    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
                <View style={styles.globalView}>

                    <View style={styles.navButtons}>

                        <TouchableOpacity
                            style={styles.navTouchable}
                            onPress={() => {
                                navigate('LogBook')
                            }}>                       
                            <View>
                                <Text style={styles.navTouchableText}>
                                Log Book
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.navTouchable}
                            onPress={() => {
                                navigate('Diagrams')
                            }}>                       
                            <View>
                                <Text style={styles.navTouchableText}>
                                Diagrams
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.navTouchable}
                            onPress={() => {
                                navigate('Analytics')
                            }}>                       
                            <View>
                                <Text style={styles.navTouchableText}>
                                Analytics
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <Input 
                        glucPlace = 'Enter your glucose here'
                        xePlace = 'Enter your XE here'
                        insulinPlace='Enter your injection value'
                    />
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    globalView: {
        backgroundColor: 'white'
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