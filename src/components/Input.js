import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Slider,
    Image,
    ImageBackground
    } from 'react-native';

    import LogBookComponent from './LogBook';
    import DiagramsComponent from './Diagrams';
    import AnalyticsComponent from './Analytics';
    import Planet from '../assets/Vegetales.jpg';

class HomeInput extends Component{
    constructor(){
        super();
        this.state = {
            glucoseInput: '',
            minGlucValue: 0,
            maxGlucValue : 20,
            glucoseSlide: null,
            buInput: '',
            buSlide: null,
            insulinInput: '',
            insulinSlide: null,
            dateInput: '',
            dayInput: '',
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
                    bu: 3,
                    insulin: 4,
                    canDateUpdate: false,
                },
                {   
                    id: 3,                    
                    date: '29.04.18',
                    time: '09:55',
                    glucose: 7.1,
                    bu: 2.5,
                    insulin: 3,
                    canDateUpdate: false,
                },
                {
                    id: 2,
                    date: '21.04.18',
                    time: '10:22',
                    glucose: 6.2,
                    bu: 4,
                    insulin: 6,
                    canDateUpdate: false,
                },
                {
                    id: 1,
                    date: '20.04.18',
                    time: '20:00',
                    glucose: 4.9,
                    bu: 2,
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
                    bu: 3,
                    insulin: 4,
                    canDateUpdate: false,
                },
                {   
                    id: 3,                    
                    date: '29.04.18',
                    time: '09:55',
                    glucose: 7.1,
                    bu: 2.5,
                    insulin: 3,
                    canDateUpdate: false,
                },
                {
                    id: 2,
                    date: '21.04.18',
                    time: '10:22',
                    glucose: 6.2,
                    bu: 4,
                    insulin: 6,
                    canDateUpdate: false,
                },
                {
                    id: 1,
                    date: '20.04.18',
                    time: '20:00',
                    glucose: 4.9,
                    bu: 2,
                    insulin: 2,
                    canDateUpdate: true,
                }
            ],    
            latestNotes:[],       
        }
    }

    //INPUT FUNCTIONS

    //Glucose Input
    onGlucChange = (value) => {
        
        this.setState({
            glucoseInput: value,
        })
  
        this.calculateDate();
        this.makeLatest();
    }

    onGlucSliding = (value) => {
        let decimal = Math.round((value%1)*10);
        let natural = value - value % 1;
        if (decimal == 10){
            decimal = 0;
        }
        this.setState({
            glucoseSlide: value,
            glucoseInput: natural + "." + decimal,
        })
        this.calculateDate();
        this.makeLatest();
    }

    //Bread units Input here

    onBuChange = (value) => {
        
        this.setState({
            buInput: value,
        })
  
        this.calculateDate();
        this.makeLatest();
    }

    onBuSliding = (value) => {
        let decimal = Math.round((value%1)*10);
        let natural = value - value % 1;
        if (decimal == 10){
            decimal = 0;
        }
        this.setState({
            buSlide: value,
            buInput: natural + "." + decimal,
        })
        this.calculateDate();
        this.makeLatest();
    }

    //Insulin Input here

    onInsulinChange = (value) => {
        
        this.setState({
            insulinInput: value,
        })
  
        this.calculateDate();
        this.makeLatest();
    }

    onInsulinSliding = (value) => {
        let decimal = Math.round((value%1)*10);
        let natural = value - value % 1;
        if (decimal == 10){
            decimal = 0;
        }
        this.setState({
            insulinSlide: value,
            insulinInput: natural + "." + decimal,
        })
        this.calculateDate();
        this.makeLatest();
    }

    //TOUCHES FUNCTIONS

    onAddNote = (prevState) => {
        const newNote = {};
        this.state.glucoseInput ? newNote.glucose = this.state.glucoseInput : newNote.glucose = null;
        newNote.bu = this.state.buInput;
        newNote.insulin = this.state.insulinInput;
        newNote.date = this.state.dateInput;
        newNote.time = this.state.timeInput;
        newNote.canDateUpdate = this.state.canDateUpdate;
        newNote.id = this.state.notes[0].id + 1;
        newNote.day = this.state.dateInput;

        let notEmpty = this.state.glucoseInput.trim().length > 0 || this.state.buInput.trim().length > 0 ||this.state.insulinInput.trim().length > 0  ;
    
        if (notEmpty) {
          this.setState(
            (prevState) => {
              return {
                notes: [newNote, ...prevState.notes],
                latest: [newNote, ...prevState.latest],
                glucoseInput: '',
                glucoseSlide: null,
                buInput: '',
                buSlide: null,
                insulinInput: '',
                insulinSlide: null,
                id: this.state.notes[0].id + 1,
                
              };
            },
          );
        }
        else { alert('Введите значение')}
      };
    
    deleteNote = i => {
        this.setState(
          (prevState) => {
            let latestNotes = prevState.latest.slice();
    
            latestNotes.splice(i, 1);
    
            return { latest: latestNotes };
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
                late.bu = this.state.notes[x].bu;
                late.insulin = this.state.notes[x].insulin;
                late.canDateUpdate = this.state.notes[x].canDateUpdate;
                late.day = this.state.notes[x].dayInput;
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
                late.bu = this.state.notes[x].bu;
                late.insulin = this.state.notes[x].insulin;
                late.canDateUpdate = this.state.notes[x].canDateUpdate;
                late.day = this.state.notes[x].dayInput;
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
                dayInput: day,
            });
        }
        else{
            this.setState({
                canDateUpdate: false,
                timeInput: hours + ':' + minutes,
                dayInput: day,
            })
        }
    }
    
    render(){
        return(
            
            <View style={styles.globalView}>

                <View style={styles.modalsView}>
                    <LogBookComponent notes={this.state.notes}/>
                    <DiagramsComponent />
                    <AnalyticsComponent />
                </View>
                
                <View
                style={styles.sliderInput}>
                    <View style={styles.sliderView}>
                        <Slider 
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={this.state.glucoseSlide > 14.9 ? this.state.glucoseSlide > 19 ? 25: 20 : 15}
                        value={this.state.glucoseSlide}
                        onValueChange={this.onGlucSliding}
                        minimumTrackTintColor="red"
                        onSlidingComplete={this.onGlucSliding}/>
                    </View>

                    <TextInput 
                    style={styles.textInput}
                    placeholder={this.props.glucPlace}
                    placeholderTextColor='black'                        
                    onChangeText={this.onGlucChange}
                    value={this.state.glucoseInput}
                    underlineColorAndroid="#087078"
                    textAlign='center'
                    keyboardType='numeric'/>
                </View>

                 <View
                style={styles.sliderInput}>
                    <View style={styles.sliderView}>
                        <Slider 
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={this.state.buSlide > 7.9 ? this.state.buSlide > 15 ? 20: 15 : 8}
                        value={this.state.buSlide}
                        onValueChange={this.onBuSliding}
                        minimumTrackTintColor="red"
                        onSlidingComplete={this.onBuSliding}/>
                    </View>
                    <TextInput 
                    style={styles.textInput}
                    placeholder={this.props.buPlace}
                    placeholderTextColor='black'                        
                    onChangeText={this.onBuChange}
                    value={this.state.buInput}
                    underlineColorAndroid="#087078"
                    textAlign='center'
                    keyboardType='numeric'/>

                </View>

                <View
                style={styles.sliderInput}>
                    <View style={styles.sliderView}>
                        <Slider 
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={this.state.insulinSlide > 9.9 ? this.state.insulinSlide > 15 ? 25: 15 : 10}
                        value={this.state.insulinSlide}
                        onValueChange={this.onInsulinSliding}
                        minimumTrackTintColor="red"
                        onSlidingComplete={this.onInsulinSliding}/>
                    </View>

                    <TextInput 
                    style={styles.textInput}
                    placeholder={this.props.insulinPlace}
                    placeholderTextColor='black'                        
                    onChangeText={this.onInsulinChange}
                    value={this.state.insulinInput}
                    underlineColorAndroid="#087078"
                    textAlign='center'
                    keyboardType='numeric'
                    />

                </View>

                <View alignItems='center'>
                    <TouchableOpacity
                        style={styles.saveData}
                        onPress={this.onAddNote}
                    >                       
                        
                            <Text style={styles.savingButtonText} textAlign='center'>
                            СОХРАНИТЬ ДАННЫЕ
                            </Text>
                        
                    </TouchableOpacity>

                    <View style={styles.latestView}>
                        <Text style={styles.latest}>
                            Последние записи
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
                                {item.glucose == null || item.glucose == '1.0' ? '' : 'Сахар: ' + item.glucose}
                                </Text>

                                <Text style={styles.item}>
                                ХЕ: {item.bu}
                                </Text>

                                <Text style={styles.item}>
                                Инсулин: {item.insulin}
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
                                {this.state.notes[i].date.split('.')[0]  == this.state.dayInput.toString() ? 'Today' : item.date}
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
        backgroundColor: 'white',
        padding: 5,
    },
    textInput: {

        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        fontSize: 18,
        fontWeight: '100',
        width: 80,

    },
    sliderInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    sliderView: {
        marginTop: 10,
        marginBottom: 0,
        borderWidth: 2,
        borderColor: "#003840",
        borderRadius: 50,
        backgroundColor: "white",
        alignContent: 'center',
        padding: 10,
        width: '70%'
    },
    slider:{
        width:'100%',
        padding: 5,
        
    },
    saveData:{
        marginTop: 20,
        marginBottom: 40,
        width: '100%',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderBottomColor: "#004048",
        borderTopColor: "#004048",
        backgroundColor: "white",
        alignContent: 'center',
        alignItems: 'center',
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
        marginBottom: 3, 
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: "#003840",
        borderTopColor: "#003840",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: 'white',

    },
    measuresItemView: {
        backgroundColor: "white",
        flex:1,
        justifyContent: 'center',
        margin: 1,
    },
    dateItemView: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
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