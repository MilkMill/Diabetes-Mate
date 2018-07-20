import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
     } from 'react-native';


class Input extends Component{

    state = {
        glucoseInput: '',
        xeInput: '',
        notes: [{
            glucose: 5,
            xe: 3.5
        }]
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    onGlucChange = (value) => {
        this.setState({
            glucoseInput: value
        })
    }

    onXeChange = (value) => {
        this.setState({
            xeInput: value
        })
    }

    onAddData = () => {
        this.setState(prevState => {
            return{
                glucoseInput: '',
                xeInput: '',

 
            }
        })
    }
    
    
    render(){
        return(
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.glucPlace}
                    placeholderTextColor='black'                        onChangeText={this.onGlucChange}
                    value={this.state.glucoseInput}
                    underlineColorAndroid='white'
                    textAlign='center'
                />
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.xePlace}
                    placeholderTextColor='black'
                    onChangeText={this.onXeChange}
                    value={this.state.xeInput}
                    underlineColorAndroid='white'
                    textAlign='center'
                />

                <View alignItems='center'>
                    <TouchableOpacity
                        style={styles.saveData}
                        onPress={this.onAddData}                        >
                        <View>
                            <Text
                                style={styles.savingButtonText}
                            >
                            SAVE
                            </Text>
                        </View>
                                
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

     const styles=StyleSheet.create({
         inputView: {
            width: '100%',
            borderTopWidth: 0,
            borderTopColor: "#cecece",
         },
         input: {
            alignItems: 'center',
            padding: 10,
            width: '100%',
            marginTop:10,
            borderBottomWidth: 1,
            borderBottomColor: '#cecece',
            fontSize: 18,
            fontWeight: '100',
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: "#cecece",
         },
         saveData:{
            marginTop: 20,
            marginBottom: 30,
            borderWidth: 1,
            borderColor: "#cdcdcd",
            borderRadius: 3,
            backgroundColor: "white",
            alignContent: 'center',
            padding: 8,
         },
         savingButtonText:{
             fontSize: 14,
             fontWeight: '100',
         },
         items: {
             backgroundColor: "#efefef",
             borderBottomWidth: 2,
             borderBottomColor: "#bcdef1",
         }
     })

export default Input;