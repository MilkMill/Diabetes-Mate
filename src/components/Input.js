import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    } from 'react-native';

    import LogBookComponent from './LogBook';
    import DiagramsComponent from './Diagrams';
    import AnalyticsComponent from './Analytics';

class HomeInput extends Component{
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
            id: '',
            latest: [
                {   
                    id: 4,
                    date: '05.05.18',
                    time: '12:30',
                    glucose: 5.6,
                    xe: 3,
                    insulin: 4,
                    canDateUpdate: false,
                },
                {   
                    id: 3,                    
                    date: '29.04.18',
                    time: '09:55',
                    glucose: 7.1,
                    xe: 2.5,
                    insulin: 3,
                    canDateUpdate: false,
                },
                {
                    id: 2,
                    date: '21.04.18',
                    time: '10:22',
                    glucose: 6.2,
                    xe: 4,
                    insulin: 6,
                    canDateUpdate: false,
                },
                {
                    id: 1,
                    date: '20.04.18',
                    time: '20:00',
                    glucose: 4.9,
                    xe: 2,
                    insulin: 2,
                    canDateUpdate: true,
                }
            ],    
            notes: [
                {   
                    id: 4,
                    date: '05.05.18',
                    time: '12:30',
                    glucose: 5.6,
                    xe: 3,
                    insulin: 4,
                    canDateUpdate: false,
                },
                {   
                    id: 3,                    
                    date: '29.04.18',
                    time: '09:55',
                    glucose: 7.1,
                    xe: 2.5,
                    insulin: 3,
                    canDateUpdate: false,
                },
                {
                    id: 2,
                    date: '21.04.18',
                    time: '10:22',
                    glucose: 6.2,
                    xe: 4,
                    insulin: 6,
                    canDateUpdate: false,
                },
                {
                    id: 1,
                    date: '20.04.18',
                    time: '20:00',
                    glucose: 4.9,
                    xe: 2,
                    insulin: 2,
                    canDateUpdate: true,
                }
            ],    
            latestNotes:[],       
        }
    }

    //INPUT FUNCTION

    onGlucChange = (value) => {
        this.setState({
            glucoseInput: value,
        
        })
        this.calculateDate();
        this.makeLatest();
    }



    onXeChange = (value) => {
        this.setState({
            xeInput: value
        })
        this.calculateDate();
        this.makeLatest();
    }

    onInsulinChange = (value) => {
        this.setState({
            insulinInput: value
        })
        this.calculateDate();
        this.makeLatest();
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
        newNote.id = this.state.notes[0].id + 1;

        let notEmpty = this.state.glucoseInput.trim().length > 0 || this.state.xeInput.trim().length > 0 ||this.state.insulinInput.trim().length > 0  ;
    
        if (notEmpty) {
          this.setState(
            (prevState) => {
              return {
                notes: [newNote, ...prevState.notes],
                latest: [newNote, ...prevState.latest],
                glucoseInput: '',
                xeInput: '',
                insulinInput: '',
                id: this.state.notes[0].id + 1
              };
            },
          );
        }
        else { alert('Введите значение')}
      };
    
    deleteNote = i => {
        this.setState(
          (prevState) => {
            let latestNotes = prevState.latestNotes.slice();
    
            latestNotes.splice(i, 1);
    
            return { latestNotes: latestNotes };
          },

        );
      };

    //LIFECYCLE FUNCTIONS

      componentWillUpdate(){
  
      }

      
    //OTHER FUNCTIONS

    makeLatest = () => {
        if (this.state.latest){
        {if (this.state.latest.length < 5) {
            let lateArr = [];
        
            for (  x = 0; x < this.state.latest.length; x++){
                let late = {};
                
                late.id = this.state.notes[x].id;
                late.date = this.state.notes[x].date;
                late.time = this.state.notes[x].time;
                late.glucose = this.state.notes[x].glucose;
                late.xe = this.state.notes[x].xe;
                late.insulin = this.state.notes[x].insulin;
                late.canDateUpdate = this.state.notes[x].canDateUpdate;
                lateArr.push(late);
            }
            this.setState({
                latest: lateArr,
            })
        }
        else{
            let lateArr = [];
        
            for (  x = 0; x < 5; x++){
                let late = {};
                
                late.id = this.state.notes[x].id;
                late.date = this.state.notes[x].date;
                late.time = this.state.notes[x].time;
                late.glucose = this.state.notes[x].glucose;
                late.xe = this.state.notes[x].xe;
                late.insulin = this.state.notes[x].insulin;
                late.canDateUpdate = this.state.notes[x].canDateUpdate;
                lateArr.push(late);
            }
            this.setState({
                latest: lateArr,
            })
        }
    }
        }
    }

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
                <View style={styles.modalsView}>
                    <LogBookComponent 
                    notes={this.state.notes}
                    />
                    <DiagramsComponent />
                    <AnalyticsComponent />
                </View>

                <TextInput 
                    style={styles.input}
                    placeholder={this.props.glucPlace}
                    placeholderTextColor='#705860'                        
                    onChangeText={this.onGlucChange}
                    value={this.state.glucoseInput}
                    underlineColorAndroid="white"
                    textAlign='center'
                    keyboardType='numeric'

                />
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.xePlace}
                    placeholderTextColor='#705860'
                    onChangeText={this.onXeChange}
                    value={this.state.xeInput}
                    underlineColorAndroid="white"
                    textAlign='center'
                    keyboardType='numeric'
                />
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.insulinPlace}
                    placeholderTextColor='#705960' 
                    onChangeText={this.onInsulinChange}
                    value={this.state.insulinInput}
                    underlineColorAndroid="white"
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
                            SAVE DATA
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.latestView}>
                        <Text style={styles.latest}>
                            Latest:
                        </Text>
                    </View>

                    {
                        this.state.latest.map((item, i ) => (
                            
                        <TouchableOpacity
                            onLongPress ={()=> this.deleteNote(i)}
                            key={i}
                            style={styles.listItem}
                        >
                            <View style={styles.itemsBlock}>

                                <View style={styles.measuresItemView}>
                                <Text style={styles.item}>
                                Glucose: {item.glucose}
                                </Text>
                                <Text style={styles.item}>
                                Bread Units: {item.xe}
                                </Text>
                                <Text style={styles.item}>
                                Injected insulin: {item.insulin}
                                </Text>
                                </View>

                                <View style={styles.dateItemView}>
                                <Text
                                style={styles.dateItem}
                                textAlign='center'>
                                {item.time}
                                </Text>
                                <Text 
                                style={styles.dateItem}
                                textAlign='center'>
                                {item.date}
                                </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

           </View>
        </View>         
        )
    }
}

const styles=StyleSheet.create({
    globalView: {
        width: '100%',
    },
    modalsView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        backgroundColor: "white",
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '100',
    },
    saveData:{
        marginTop: 20,
        marginBottom: 40,
        borderWidth: 3,
        borderColor: "#004048",
        borderRadius: 3,
        backgroundColor: "white",
        alignContent: 'center',
        padding: 8,
    },
    savingButtonText:{
        fontSize: 18,
        fontWeight: '100',
    },
    latestView: {
        borderTopWidth: 3, 
        borderTopColor: '#004048',
        width: '100%',
    },
    latest: {
        fontSize: 20,
        fontWeight: '100',
    },
    listItem: {
        width:'100%'
    },
    itemsBlock: {
        flex:1,
        marginTop: 3, 
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    measuresItemView: {
        backgroundColor: "white",
        flex:1,
        borderWidth: 2,
        justifyContent: 'center',
        margin: 1,
    },
    dateItemView: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 2,
        justifyContent: 'center',
        margin: 1,
    },
    item: {
        fontSize: 16,
        padding: 5,
    },
    dateItem: {
        fontSize: 16,
        padding: 5,
    },
    stringNoteDate: {
        fontSize: 18,
    },
    stringNote: {
        fontSize: 16,
        flex: 1,
    }
})

export default HomeInput;