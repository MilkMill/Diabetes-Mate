import React, { Component } from 'react';
import { View, TextInput, Slider, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as addActions from "../actions/add";
import { debounce } from 'lodash';

class Measures extends Component {
    constructor(props){
        super(props);
        this.debounceUpdateGluc = debounce(this.onGlucSliding, 50);
        this.debounceUpdateBU = debounce(this.onBUSliding, 50);
        this.debounceUpdateIns = debounce(this.onInsSliding, 50);
    }

  /* SAVE INPUTS TO STORE */

  /* glucose */
  onWritingGlucose = (glucose) => {
    this.props.actions.add_glucose(glucose);


  }
  onGlucSliding = (value) => {
    let decimal = Math.round((value%1)*10);
    let natural = value - value % 1;
    if (decimal == 10){
        decimal = 0;
        natural += 1;
    }
    let result = natural + "." + decimal;
    this.props.actions.add_glucose(result)
    
}

  /* bread units */
  onWritingBreadUnits = (breadUnits) => {
    this.props.actions.add_breadUnits(breadUnits)
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
  onWritingInsulin = (insulin) => {
    this.props.actions.add_insulin(insulin)
  }
  onInsSliding = (value) => {
    let decimal = Math.round((value%1)*10);
    let natural = value - value % 1;
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
    }

  /* date */
  calculateDate = () => {
    let global = new Date()
  
    let day = global.getDate();
    for ( let i = 0; i < 10; i++){
        if (day == i) day = '0' + i;
    }

    let weekDay = global.getDay() + 1;
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

        let month = global.getMonth() + 1;
        for ( let i = 0; i < 10; i++){
            if (month == i) month = '0' + i;
        }
  
        let year = global.getFullYear().toString();
        year = year.charAt(2) + year.charAt(3);
  
        let hours = global.getHours();
        for ( let i = 0; i < 10; i++){
            if (hours == i) hours = '0' + i;
        }
        let minutes = global.getMinutes();
        for ( let i = 0; i < 10; i++){
            if (minutes == i) minutes = '0' + i;
        }
        let dateInput = day + '.' + month + '.' + year + ', ' + weekDay;
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

  render(){
    const { glucose, breadUnits, insulin } = this.props
      return(
        <View style={styles.globalView}>

            {/* GLUCOSE_BLOCK */}
            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={12}
                    value={+glucose}
                    onValueChange={value => this.debounceUpdateGluc(value)}
                    minimumTrackTintColor="red"
                    onSlidingComplete={this.onEndEditingOfAllOwn}
                    step={0.1}/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={glucose}
                onChangeText={this.onWritingGlucose}
                onEndEditing={this.onEndEditingOfAllOwn}
                placeholder="Сахар"
                textAlign="center"/>

            </View>
          

            {/* BREAD_UNITS_BLOCK */}
            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={10}
                    value={+breadUnits}
                    onValueChange={value => this.debounceUpdateBU(value)}
                    minimumTrackTintColor="green"
                    onSlidingComplete={this.onEndEditingOfAllOwn}
                    step={0.1}/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={breadUnits}
                onChangeText={this.onWritingBreadUnits}
                onEndEditing={this.onEndEditingOfAllOwn}
                placeholder="ХЕ"
                textAlign="center"/>

            </View>

        {/* INSULIN_BLOCK */}
            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={12}
                    value={+insulin}
                    onValueChange={value => this.debounceUpdateIns(value)}
                    minimumTrackTintColor="blue"
                    onSlidingComplete={this.onEndEditingOfAllOwn}
                    step={0.5}/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={insulin}
                onChangeText={this.onWritingInsulin}
                onEndEditing={this.onEndEditingOfAllOwn}
                placeholder="Инсулин"
                textAlign="center"/>

            </View>
        </View>
      )
  }
}
  
  const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(addActions, dispatch) };
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