import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity , Button, Modal} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import Measures from "../components/Measures";
import AddingButton from '../components/AddingButton';


class ListItemRewrite extends Component {

  deleteNote = () => {
    this.props.actions.delete_note(this.props.indexSelected);  
  }


  handleModalClose = () => {
    this.props.actions.boolean_modal(this.props.modal);
    this.props.actions.sort_notes();
    this.props.actions.make_empty_again();
  }

  render() {
    const {
        notes, 
        glucoseInput, 
        breadUnitsInput, 
        insulinInput, 
        dateInput, 
        datePicked,
        timePicked,
        timeInput, 
        dateMS,
        modal,
        indexSelected,
    } = this.props;

    return (
      
      <View>

        <View style={{height: 0, backgroundColor: "black"}}></View>

        <Measures 
          dateInput={dateInput}
          timeInput={timeInput}
          dateMS={dateMS === '' ? notes[indexSelected].dateMS : dateMS}
          datePicked={datePicked === '' ? notes[indexSelected].date : datePicked}
          timePicked={timePicked === '' ? notes[indexSelected].time : timePicked}

          glucoseInput={glucoseInput === '' ? notes[indexSelected].glucose : glucoseInput === 'hollow' ? glucoseInput : glucoseInput }
          breadUnitsInput={breadUnitsInput === '' ? notes[indexSelected].breadUnits : breadUnitsInput === 'hollow' ? breadUnitsInput : breadUnitsInput }
          insulinInput={insulinInput === '' ? notes[indexSelected].insulin : insulinInput === 'hollow' ? insulinInput : insulinInput }
        />

        <AddingButton 

          glucoseInput={glucoseInput === '' ? notes[indexSelected].glucose : glucoseInput}
          breadUnitsInput={breadUnitsInput === '' ? notes[indexSelected].breadUnits : breadUnitsInput}
          insulinInput={insulinInput === '' ? notes[indexSelected].insulin : insulinInput}

          datePicked={datePicked === '' ? notes[indexSelected].date : datePicked}
          timePicked={timePicked === '' ? notes[indexSelected].time : timePicked}
          dateMS={dateMS === '' ? notes[indexSelected].dateMS : dateMS}

          modal={modal}

          indexSelected={indexSelected}
        />

        <Button
          title='Close modal'
          onPress={this.handleModalClose}
        />

        <Button 
          title="Delete note" 
          onPress={this.deleteNote} 
        />

      </View>

    );
  }
}

ListItemRewrite.propTypes = {
  notes: PropTypes.array,
  glucoseInput: PropTypes.string,
  breadUnitsInput: PropTypes.string,
  insulinInput: PropTypes.string,
  dateInput: PropTypes.string,
  timeInput: PropTypes.string,
  datePicked: PropTypes.string,
  timePicked: PropTypes.string,
  dateMS: PropTypes.number,
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions , dispatch)};
};

const mapStateToProps = state => {
  return {
    notes: state.list.notes,
    breadUnitsInput: state.list.breadUnitsInput,
    insulinInput: state.list.insulinInput,
    dateInput: state.list.dateInput,
    datePicked: state.list.datePicked,
    timeInput: state.list.timeInput,
    timePicked:state.list.timePicked,
    dateMS: state.list.dateMS,
    modal: state.list.modal,
    glucoseSelected: state.list.glucoseSelected,
    indexSelected: state.list.indexSelected,
    glucoseInput: state.list.glucoseInput
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemRewrite);
