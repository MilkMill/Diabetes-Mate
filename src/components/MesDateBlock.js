import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import DatePicker from 'react-native-datepicker'

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

class MesDateBlock extends Component {

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
        datePicked,
        timePicked
    } = this.props

      return(
            <View style={styles.pickers}>
                <DatePicker
                    style={styles.datePicker}
                    date={datePicked ? datePicked : this.props.dateInput}
                    mode="date"
                    androidMode="default"
                    placeholder="select date"
                    format="MMM DD, YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconSource={null}
                    customStyles={{
                        dateInput: {
                            margin: 0,
                            borderWidth: 2,
                            borderRadius: 50,
                        },
                        dateText: {
                            fontSize: 20,
                        }
                    }}
                    onDateChange={this.onDateValueChange}
                />

                <DatePicker
                    style={styles.timePicker}
                    date={timePicked ? timePicked : this.props.timeInput}
                    mode="time"
                    androidMode="default"
                    placeholder="select time"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconSource={null}
                    customStyles={{
                        dateInput: {
                           margin: 30,
                           borderWidth: 2,
                           borderRadius: 50,
                        },
                        dateText: {
                            fontSize: 20,
                        }
                    }}
                    onDateChange={this.onTimeValueChange}
                />
            </View>
      )
  }
}

MesDateBlock.propTypes = {
    datePicked: PropTypes.string,
    timePicked: PropTypes.string,
    dateInput: PropTypes.string,
    timeInput: PropTypes.string,
}
  
  const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(listActions, dispatch) };
  };

const styles = StyleSheet.create( {
globalView: {
    width: '100%',
},    noticeText: {
    fontSize: 20,
    color: "silver"
},
    noticeText: {
        fontSize: 20,
        color: "silver"
    },
    pickers:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
        datePicker: {
            
            marginLeft: 20
        },
        timePicker: {
            marginRight: 140,
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

export default connect(null, mapDispatchToProps)(MesDateBlock);