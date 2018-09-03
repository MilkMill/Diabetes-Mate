import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import MesDateBlock from './MesDateBlock';
import MeasureBlock from './MeasureBlock'

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

class Measures extends Component {

    render(){

    const { 
        glucoseInput, 
        breadUnitsInput, 
        insulinInput,
    } = this.props

      return(
        <View style={styles.globalView}>

            <Text style={styles.noticeText}>
              {
                this.props.glucoseInput.toString().trim() === '' &&
                this.props.breadUnitsInput.toString().trim() === '' &&
                this.props.insulinInput.toString().trim() === ''
                ?
                'Enter values or slide the dot to set data' : 'Click the button to save parameters '/*  ͡ ° ͜ʖ ͡ ° */
              }
            </Text>

            {/* INPUTS_BLOCK */}

            <MesDateBlock 
                timeInput={this.props.timeInput} 
                dateInput={this.props.dateInput}
                timePicked={this.props.timePicked}
                datePicked={this.props.datePicked} />

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

Measures.propTypes = {
    glucoseInput: PropTypes.string,
    insulinInput: PropTypes.string,
    breadUnitsInput: PropTypes.string,
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