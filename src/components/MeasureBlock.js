import React, { Component } from 'react';
import { View, TextInput, Slider, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import { debounce } from 'lodash';

class MeasureBlock extends Component {
    constructor(props){
        super(props);
        /* debounce для сглаживания лагов при движении слайдера */
        this.debounceUpdate = debounce(this.onSlidingInput, 50);
    }


  /* SAVE INPUTS TO STORE (Insulin - default prop)*/

  onWritingInput = (inputValue) => {
    this.props.glucose ? this.props.actions.add_glucose(inputValue) :
    this.props.breadUnits ? this.props.actions.add_breadUnits(inputValue) :
    this.props.actions.add_insulin(inputValue)
    }

  onSlidingInput = (inputValue) => {
    let decimal = Math.round((inputValue%1)*10);
    let natural = inputValue - inputValue % 1;
    if (decimal == 10){
        decimal = 0;
        natural += 1;
    }
    let result = natural + "." + decimal;
    this.props.glucose ? this.props.actions.add_glucose(result) :
    this.props.breadUnits ? this.props.actions.add_breadUnits(result) :
    this.props.actions.add_insulin(result)
    }

  render(){

    const { 
        inputValue
    } = this.props

      return(

            <View style={styles.sliderIncludedInput}>

                <View style={styles.sliderView}>
                    <Slider 
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={12}
                    value={+inputValue}
                    onValueChange={value => this.debounceUpdate(value)}
                    minimumTrackTintColor="blue"
                    onSlidingComplete={value => this.debounceUpdate(value)}
                    step={
                        this.props.glucose ? 0.1 :
                        this.props.breadUnits ? 0.1 : 0.5
                    }/> 
                </View>

                <TextInput 
                style={styles.measureInput}
                value={inputValue.toString() === 'hollow' ? '' : inputValue.toString()}
                onChangeText={this.onWritingInput}
                keyboardType="numeric"
                placeholder={this.props.placeholderName}
                textAlign="center"
                underlineColorAndroid="white"
                
                />

            </View>

      )
  }
}

MeasureBlock.propTypes = {
    inputValue: PropTypes.string,
    placeholderName: PropTypes.string,
    glucose: PropTypes.bool,
    insulin: PropTypes.bool,
    breadUnits: PropTypes.bool,
    result: PropTypes.string,
    decimal: PropTypes.number,
    natural: PropTypes.number,
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

export default connect(null, mapDispatchToProps)(MeasureBlock);