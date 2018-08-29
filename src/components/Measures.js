import React, { Component } from 'react';
import { View, TextInput, Slider, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import { debounce } from 'lodash';

class Measures extends Component {
    constructor(props){
        super(props);
        /* debounce для сглаживания лагов при движении слайдера */
        this.debounceUpdateGluc = debounce(this.onGlucSliding, 50);
        this.debounceUpdateBU = debounce(this.onBUSliding, 50);
        this.debounceUpdateIns = debounce(this.onInsSliding, 50);
    }

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

  /* SAVE INPUTS TO STORE */

  /* glucose */
  onWritingGlucose = (glucoseInput) => {
    this.props.actions.add_glucose(glucoseInput);


  }
  onGlucSliding = (glucoseInput) => {
    let decimal = Math.round((glucoseInput%1)*10);
    let natural = glucoseInput - glucoseInput % 1;
    if (decimal == 10){
        decimal = 0;
        natural += 1;
    }
    let result = natural + "." + decimal;
    this.props.actions.add_glucose(result)
    
}

  /* bread units */
  onWritingBreadUnits = (breadUnitsInput) => {
    this.props.actions.add_breadUnits(breadUnitsInput)
  }
  onBUSliding = (value) => {
    let decimal = Math.round((value%1)*10);
    let natural = value - value % 1;
    if (decimal == 10){
        decimal = 0;
        natural += 1;
    }
    let result = natural + "." + decimal;
    this.props.actions.add_breadUnits(result);
}

  /* insulin */

  onWritingInsulin = (insulinInput) => {
    this.props.actions.add_insulin(insulinInput)
  }

  onInsSliding = (insulinInput) => {
    let decimal = Math.round((insulinInput%1)*10);
    let natural = insulinInput - insulinInput % 1;
    if (decimal == 10){
        decimal = 0;
        natural += 1;
    }
    let result = natural + "." + decimal;
    this.props.actions.add_insulin(result);
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

            {/* INPUTS_BLOCK */}

            {/* DATE_AND_TIME_PICKER_BLOCK */}
            <View>
                <DatePicker
                    style={{width: 200, borderWidth: 0}}
                    date={datePicked ? datePicked : this.props.dateInput}
                    mode="date"
                    androidMode="default"
                    placeholder="select date"
                    format="MMM DD, YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                        }
                    }}
                    onDateChange={this.onDateValueChange}
                />

                <DatePicker
                    style={{width: 200, borderWidth: 0}}
                    date={timePicked ? timePicked : this.props.timeInput}
                    mode="time"
                    androidMode="default"
                    placeholder="select time"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                        }
                    }}
                    onDateChange={this.onTimeValueChange}
                />
            </View>

            {/* GLUCOSE_BLOCK */}
            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={12}
                    value={+glucoseInput}
                    onValueChange={value => this.debounceUpdateGluc(value)}
                    minimumTrackTintColor="red"
                    onSlidingComplete={this.onEndEditingOfAllOwn}
                    step={0.1}/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={glucoseInput.toString()}
                onChangeText={this.onWritingGlucose}
                onEndEditing={this.onEndEditingOfAllOwn}
                keyboardType="numeric"
                placeholder="Сахар"
                textAlign="center"/>

            </View>
          
            {/* BREAD_UNITS_BLOCK BU BRUN*/}
            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={10}
                    value={+breadUnitsInput}
                    onValueChange={value => this.debounceUpdateBU(value)}
                    minimumTrackTintColor="green"
                    onSlidingComplete={this.onEndEditingOfAllOwn}
                    step={0.1}/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={breadUnitsInput}
                onChangeText={this.onWritingBreadUnits}
                onEndEditing={this.onEndEditingOfAllOwn}
                keyboardType="numeric"
                placeholder="ХЕ"
                textAlign="center"/>

            </View>

        {/* INSULIN_BLOCK INS INSUL */}
            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={12}
                    value={+insulinInput}
                    onValueChange={value => this.debounceUpdateIns(value)}
                    minimumTrackTintColor="blue"
                    onSlidingComplete={this.onEndEditingOfAllOwn}
                    step={0.5}/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={insulinInput.toString()}
                onChangeText={this.onWritingInsulin}
                onEndEditing={this.onEndEditingOfAllOwn}
                keyboardType="numeric"
                placeholder="Инсулин"
                textAlign="center"/>

            </View>
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
    sliderIncludedInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
        measureInput: {
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
            fontSize: 18,
            fontWeight: '100',
            width: "20%",
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
});

export default connect(null, mapDispatchToProps)(Measures);