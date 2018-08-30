import React, { Component } from 'react';
import { View, TextInput, Slider, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'

import MeasureBlock from './MeasureBlock'

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";
import DateBlock from './DateBlock';

class Measures extends Component {

componentWillMount(){
    this.calculateDate();
    this.calculateTime();
    this.calculateDateMS();
}

componentDidUpdate(){
    this.calculateDate();
    this.calculateTime();
    this.calculateDateMS();
}

    /* DATE_AND_TIME */
    onEndEditingOfAllOwn = () => {
        this.calculateDate();
        this.calculateTime();
        this.calculateDateMS();
    }

    /* date */
    onDateValueChange = (value) => {
        value ? this.props.actions.add_date_from_calendar(value) 
        : this.props.actions.add_date_from_calendar(this.props.dateInput)
    }

    onTimeValueChange = (value) => {
        value ? this.props.actions.add_time_from_calendar(value) 
        : this.props.actions.add_time_from_calendar(this.props.timeInput)
    }


  calculateDate = () => {

    let global = new Date()
  
    let day = global.getDate();
    for ( let i = 0; i < 10; i++){
        if (day == i) day = '0' + i;
    }
        let month = global.getMonth() + 1;
        switch(month){
            case 1: month = 'Jan';
            break;
            case 2: month = 'Feb';
            break;
            case 3: month = 'Mar';
            break;
            case 4: month = 'Apr';
            break;
            case 5: month = 'May';
            break;
            case 6: month = 'Jun';
            break;
            case 7: month = 'Jul';
            break;
            case 8: month = 'Aug';
            break;
            case 9: month = 'Sep';
            break;
            case 10: month = 'Oct';
            break;
            case 11: month = 'Nov';
            break;
            case 12: month = 'Dec';
            break;
        }
  
        let year = global.getFullYear().toString();
  
        let hours = global.getHours();
        for ( let i = 0; i < 10; i++){
            if (hours == i) hours = '0' + i;
        }
        let minutes = global.getMinutes();
        for ( let i = 0; i < 10; i++){
            if (minutes == i) minutes = '0' + i;
        }
        let dateInput = month + '-' + day + '-' + year;

     this.props.actions.add_date(dateInput);
    }

    /* time */  
    calculateTime = () => {
      let global = new Date();
      let hours = global.getHours();
        for ( let i = 0; i < 10; i++){
            if (hours == i) hours = '0' + i;
        }
        let minutes = global.getMinutes();
        for ( let i = 0; i < 10; i++){
            if (minutes == i) minutes = '0' + i;
        }
        let timeInput = hours + ':' + minutes;
        this.props.actions.add_time(timeInput);
    }

    /* date miliseconds */
    calculateDateMS = () => {
        let datePicked = '';
        if(this.props.datePicked === '') {datePicked = this.props.dateInput}
        else {datePicked = this.props.datePicked};
    
        let timePicked = '';
        if(this.props.timePicked === '') {timePicked = this.props.timeInput}
        else {timePicked = this.props.timePicked}
    
        let dateMS = Date.parse(datePicked + ' ' + timePicked)
        if (datePicked==='' && timePicked==='') dateMS = this.props.dateMS;
    
        this.props.actions.add_dateMS(dateMS);
    }

  render(){

    const { 
        glucoseInput, 
        breadUnitsInput, 
        insulinInput,
        datePicked,
        timePicked
    } = this.props

      return(
        <View style={styles.globalView}>

            <Text style={styles.noticeText}>
              {
                this.props.glucoseInput.toString().trim() === '' &&
                this.props.breadUnitsInput.toString().trim() === '' &&
                this.props.insulinInput.toString().trim() === ''
                ?
                'Enter values or slide the dot' : 'Click the button to save parameters'
              }
            </Text>

            {/* INPUTS_BLOCK */}

            <DateBlock timeInput={this.props.timeInput} dateInput={this.props.dateInput} />

            {/* GLUCOSE_BLOCK */}
            <MeasureBlock 
            inputValue={glucoseInput}
            glucose={true}
            placeholderName="Сахар"
            />
          
            {/* BREAD_UNITS_BLOCK BU BRUN*/}
            <MeasureBlock 
            inputValue={breadUnitsInput}
            breadUnits={true}
            placeholderName="ХЕ"
            />

            {/* INSULIN_BLOCK INS INSUL */}
            <MeasureBlock 
            inputValue={insulinInput}
            insulin={true}
            placeholderName="Инсулин"
            />

        </View>
      )
  }
}
  
  const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(listActions, dispatch) };
  };

const styles = StyleSheet.create( {
globalView: {
    width: '100%',
},  
    noticeText: {
        fontSize: 20,
        color: "silver"
    },
});

export default connect(null, mapDispatchToProps)(Measures);