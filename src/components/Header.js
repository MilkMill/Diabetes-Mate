import React from 'react';
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
        padding: 10,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
    headerText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    border:{
        marginLeft: 10,
        marginRight: 10,        
        borderBottomWidth: 3,
        borderBottomColor: "black",
    },
})

export default Header;