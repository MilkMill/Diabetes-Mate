import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";


class AddingButton extends Component {
  

  onPressSave = () => {
    
    let modalLocal = this.props.modal;
    if ( modalLocal === true ) {

      let glucose = this.props.glucoseInput ;
      let breadUnits = this.props.breadUnitsInput;
      let insulin = this.props.insulinInput;

      glucose === 'hollow' ? glucose = '' : glucose;
      breadUnits === 'hollow' ? breadUnits = '' : breadUnits;
      insulin === 'hollow' ? insulin = '' : insulin;

      if(glucose.toString().trim().length > 0 ||
      breadUnits.toString().trim().length > 0 ||
      insulin.toString().trim().length > 0 ) {
        this.props.actions.delete_note(this.props.indexSelected);
        this.props.actions.make_note(
            glucose, 
            breadUnits, 
            insulin,
            this.props.datePicked,
            this.props.timePicked,
            this.props.dateMS,
        );
        this.props.actions.make_empty_again();
        this.props.actions.sort_notes();    
      }
      else{
        alert('Введите значение!')
      }
      
      }

      else {
        if(this.props.glucoseInput.toString().trim().length > 0 ||
        this.props.breadUnitsInput.toString().trim().length > 0 ||
        this.props.insulinInput.toString().trim().length > 0 ) {
    
        let datePicked = '';
        if(this.props.datePicked === '') {datePicked = this.props.dateInput}
        else {datePicked = this.props.datePicked};
    
        let timePicked = '';
        if(this.props.timePicked === '') {timePicked = this.props.timeInput}
        else {timePicked = this.props.timePicked}
    
        let dateMS = Date.parse(datePicked + ' ' + timePicked)
        if (datePicked==='' && timePicked==='') dateMS = this.props.dateMS;
        this.props.actions.make_note(
            this.props.glucoseInput, 
            this.props.breadUnitsInput, 
            this.props.insulinInput,
            datePicked,
            timePicked,
            dateMS
        );
        this.props.actions.make_empty_again();
        this.props.actions.sort_notes();    
        if(this.props.modal){
          this.props.actions.delete_note(this.props.indexSelected);
        }
        }
        else{
            alert('Введите значение!')
        }
      }
    }
    

  render(){
      return(
        <View style={styles.savingButtonView}>

          <TouchableOpacity
          onPress={this.onPressSave}>
          
              <Text style={styles.savingButtonText}>
                  SAVE DATA TO REDUX STORE
              </Text>

          </TouchableOpacity>

        </View>
      )
  }
}

AddingButton.propTypes = {
  modal: PropTypes.bool,
  glucoseInput: PropTypes.string,
  breadUnitsInput: PropTypes.string,
  insulinInput: PropTypes.string,
  datePicked: PropTypes.string,
  timePicked: PropTypes.string,
  dateMS: PropTypes.number,
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch) };
};

const styles = StyleSheet.create({
  savingButtonView: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 5
  },
  savingButtonText: {
    fontSize: 22,
  }
})


export default connect(null, mapDispatchToProps)(AddingButton);