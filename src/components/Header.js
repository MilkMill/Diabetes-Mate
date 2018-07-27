import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    ImageBackground
     } from 'react-native';
    
import Vegetales from '../assets/Vegetales.jpg'

const Header = () => {
        return(
            <View>
                
                <View style={styles.headerView} alignItems= 'center'>
                    <View style={styles.header}/>
                    <ImageBackground source={Vegetales} style={styles.headerImage}>
                    <Text style={styles.headerText}>
                    D I A B E T E S   M A T E
                    </Text>
                    </ImageBackground>
                </View>
                
                <View style={styles.border}/>
             </View>
        
    
    
        )
    }

const styles = StyleSheet.create({
    
    header: {
        height: 25,
        width: "100%",
        backgroundColor: "black",
    },
    headerImage: {
        marginTop: 0,
        marginBottom: 0,
        borderWidth: 0,
        borderColor: "#004048",
        borderRadius: 50,
        backgroundColor: "white",
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },
    headerText: {
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
    },
})

export default Header;