import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from "../components/List";
import Header from '../components/Header';
import Measures from '../components/Measures';
import AddingButton from '../components/AddingButton';

class App extends Component {
  render() {
    const { notes, glucoseInput, breadUnitsInput, insulinInput, dateInput, datePicked, timeInput, timePicked, dateMS } = this.props;
    const { modal, glucoseSelected, indexSelected} = this.props;
    return (
      <ScrollView>

        <Header/>

        <Measures 
          dateInput={dateInput}
          timeInput={timeInput}
          glucoseInput={glucoseInput}
          breadUnitsInput={breadUnitsInput}
          insulinInput={insulinInput}
          dateMS={dateMS}
          datePicked={datePicked}
          timePicked={timePicked}
        />

        <AddingButton 
          notes={notes} 
          glucoseInput={glucoseInput} 
          breadUnitsInput={breadUnitsInput} 
          insulinInput={insulinInput} 
          dateInput={dateInput} 
          datePicked={datePicked}
          timePicked={timePicked}
          timeInput={timeInput} 
          dateMS={dateMS}
        />

        <List 
          notes={notes} 
          modal={modal} 
          glucoseSelected={glucoseSelected} 
          indexSelected={indexSelected}
        />       
       
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.list.notes,
    glucoseInput: state.list.glucoseInput,
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
  };
};

App.propTypes = {
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

export default connect(mapStateToProps, null)(App);