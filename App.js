import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Diary from './components/Diary.js';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        glucoseInput: '',
        glucose: [],

    }
}
saveData = () => { //MW-MiddleWare
let glucoseInputMW = this.state.glucoseInput;
let glucoseMW = this.state.glucose;
let date = Date.now();
glucoseMW.push(value: glucoseInputMW, date: date);
this.setState({glucose: glucoseMW});
}

render(){
    return(
        <View style={styles.view}>
            <Text>Это родительский компонент</Text>
            <TextInput 
            style={styles.glucose}
            placeholder='Glucose'
            placeholderTextColor='red'
            textAlign='center'
            onChangeText={(glucoseInput) => {this.setState({glucoseInput})}}
            inSubmitEditting={this.saveData}
             />
            <Button 
            title='Add to data'
            onPress={this.saveData} />
            <Text>{this.state.glucoseInput}</Text>
            <Text>{this.state.glucose}</Text>
            <Diary glucoseInput = {this.state.glucoseInput}/>
            
            </View>
    );
}
}



const styles = StyleSheet.create ({
view: {
    borderWidth: 1,
    backgroundColor: 'silver',
    margin: 20,
},
glucose: {
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'powderblue'
},
diary: {
  borderWidth: 1,
  borderRadius: 2,
},
})