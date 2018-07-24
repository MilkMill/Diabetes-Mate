import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
     } from 'react-native';

class Input extends Component{
    constructor(){
        super();
        this.state = {
            glucoseInput: '',
            xeInput: '',
            insulinInput: '',
            dateInput: '',
            canDateUpdate: true,
            dates: [],
            timeInput: '',
            notes: [
                {   
                    date: '20.04.18',
                    time: '20:40',
                    glucose: 5.6,
                    xe: 3,
                    insulin: 4,
                    canDateUpdate: false,
                },
                {   
                    date: '20.04.18',
                    time: '20:40',
                    glucose: 7.1,
                    xe: 2.5,
                    insulin: 3,
                    canDateUpdate: false,
                },
                {
                    date: '20.04.18',
                    time: '20:40',
                    glucose: 6.2,
                    xe: 4,
                    insulin: 6,
                    canDateUpdate: false,
                },
                {
                    date: '20.04.18',
                    time: '20:40',
                    glucose: 4.9,
                    xe: 2,
                    insulin: 2,
                    canDateUpdate: true,
                }
            ],           
        }
    }

    //INPUT FUNCTION

    onGlucChange = (value) => {
        this.setState({
            glucoseInput: value,
        
        })
        this.calculateDate();
    }



    onXeChange = (value) => {
        this.setState({
            xeInput: value
        })
        this.calculateDate();
    }

    onInsulinChange = (value) => {
        this.setState({
            insulinInput: value
        })
        this.calculateDate();
    }

    //TOUCHES FUNCTIONS

    onAddNote = (prevState) => {
        const newNote = {};
        newNote.glucose = this.state.glucoseInput;
        newNote.xe = this.state.xeInput;
        newNote.insulin = this.state.insulinInput;
        newNote.date = this.state.dateInput;
        newNote.time = this.state.timeInput;
        newNote.canDateUpdate = this.state.canDateUpdate;

        
        let notEmpty = this.state.glucoseInput.trim().length > 0 || this.state.xeInput.trim().length > 0 ||this.state.insulinInput.trim().length > 0  ;
    
        if (notEmpty) {
          this.setState(
            (prevState) => {
              return {
                notes: [newNote, ...prevState.notes],
                glucoseInput: '',
                xeInput: '',
                insulinInput: '',
              };
            },
          );
        }
        else { alert('Введите значение')}
      };
    
      deleteNote = i => {
        this.setState(
          (prevState) => {
            let notes = prevState.notes.slice();
    
            notes.splice(i, 1);
    
            return { notes: notes };
          },

        );
      };

      //LIFECYCLE FUNCTIONS

      componentWillUpdate(){
  
      }

      
    //OTHER FUNCTIONS

    calculateDate = () => {

        let time = new Date();

        let day = time.getDate();
        for ( let i = 0; i < 10; i++){
            if (day == i) day = '0' + i;
        }

        let weekDay = time.getDay() + 1;
            switch(weekDay) {
                case 1: weekDay = 'Понедельник';
                break;
                case 2: weekDay = 'Вторник';
                break;
                case 3: weekDay = 'Среда';
                break;
                case 4: weekDay = 'Четверг';
                break;
                case 5: weekDay = 'Пятница';
                break;
                case 6: weekDay = 'Суббота';
                break;
                case 7: weekDay = 'Воскресенье';
                break;
            }

        let month = time.getMonth() + 1;
        for ( let i = 0; i < 10; i++){
            if (month == i) month = '0' + i;
        }

        let year = time.getFullYear().toString();
        year = year.charAt(2) + year.charAt(3);

        let hours = time.getHours();
        for ( let i = 0; i < 10; i++){
            if (hours == i) hours = '0' + i;
        }
        let minutes = time.getMinutes();
        for ( let i = 0; i < 10; i++){
            if (minutes == i) minutes = '0' + i;
        }
        
        if ( day + '.' + month + '.' + year != this.state.notes[0].date){
            this.setState({ 
                dateInput: day + '.' + month + '.' + year + ', ' + weekDay,
                timeInput: hours + ':' + minutes,
                canDateUpdate: true,
            });
        }
        else{
            this.setState({
                canDateUpdate: false,
                timeInput: hours + ':' + minutes,
            })
        }
    }
    
    render(){
        return(
            
            <View style={styles.globalView}>
                
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.glucPlace}
                    placeholderTextColor='black'                        
                    onChangeText={this.onGlucChange}
                    value={this.state.glucoseInput}
                    underlineColorAndroid='white'
                    textAlign='center'
                    keyboardType='numeric'
                />
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.xePlace}
                    placeholderTextColor='black'
                    onChangeText={this.onXeChange}
                    value={this.state.xeInput}
                    underlineColorAndroid='white'
                    textAlign='center'
                    keyboardType='numeric'
                />
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.insulinPlace}
                    placeholderTextColor='black'
                    onChangeText={this.onInsulinChange}
                    value={this.state.insulinInput}
                    underlineColorAndroid='white'
                    textAlign='center'
                    keyboardType='numeric'
                />

                <View alignItems='center'>
                    <TouchableOpacity
                        style={styles.saveData}
                        onPress={this.onAddNote}
                    >                       
                        <View>
                            <Text
                                style={styles.savingButtonText}
                            >
                            SAVE
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.latestView}>
                        <Text style={styles.latest}>
                            Latest:
                        </Text>
                    </View>

                    <FlatList
                        data={this.state.notes}
                        style={styles.listItem}
                        renderItem={({ item, index }) =>
                        <TouchableOpacity
                        onLongPress={() => this.deleteNote(index)}
                        style={styles.items}
                        >

                            <View>
                                
                                <View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-start'}}>
                                <Text style={styles.stringNote}>
                                {item.time}{item.canDateUpdate ? ' - ' + item.date : ''}
                                </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                                <Text style={styles.stringNote}>
                                Glucose:
                                </Text>
                                <Text style={styles.stringNote}>
                                {item.glucose}
                                </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                                <Text style={styles.stringNote}>
                                Food:
                                </Text>
                                <Text style={styles.stringNote}>
                                {item.xe}
                                </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                                <Text style={styles.stringNote}>
                                Insulin:
                                </Text>
                                <Text style={styles.stringNote}>
                                {item.insulin}
                                </Text>
                                </View>
                            </View>
                            
                            </TouchableOpacity>}
                        />
                        
                </View>
                
            </View>

        )
    }
}

     const styles=StyleSheet.create({
         globalView: {
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
         latestView: {
             borderTopWidth: 3, 
             borderTopColor: '#FCF6ED',
             width: '100%',
         },
         latest: {
            fontSize: 20,
            fontWeight: '100',
         },
         listItem: {
            width:'100%'
         },
         items: {
             backgroundColor: "#FBECE4",
             borderBottomWidth: 3,
             borderTopWidth: 3,
             marginTop: 5,
             borderBottomColor: "#FBE7DA",
             borderTopColor: "#FCF3ED",
         },
         stringNoteDate: {
            fontSize: 18,
         },
         stringNote: {
             fontSize: 16,
             flex: 1,
         }
     })

export default Input;