import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View
     } from 'react-native';

const Header = () => {
        return(
            <View>
                <View style={styles.headerView} alignItems= 'center'>
                    <View style={styles.header}/>
                    <Text style={styles.headerText}>
                    D I A B E T E S   M A T E
                    </Text>
                </View>
                <View style={styles.border}/>
             </View>
        
    
    
        )
    }

const styles = StyleSheet.create({
    
    header: {
        height: 20,
        width: "100%",
        backgroundColor: "black",
    },
    headerText: {
        fontSize: 26,
        marginTop: 10,
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
})

export default Header;