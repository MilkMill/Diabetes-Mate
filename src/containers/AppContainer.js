import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as addActions from "../actions/add";

import List from "../components/List";
import NoteAddingBlock from '../components/NoteAddingBlock';
import Header from '../components/Header';

class App extends Component {
  render() {
    const { notes, glucose, breadUnits, insulin, date, time } = this.props;
    return (
      <View>

        <Header/>
        <NoteAddingBlock glucose={glucose} breadUnits={breadUnits} insulin={insulin} date={date} time={time}/>
        <ScrollView>
        <List notes={notes}/>
        </ScrollView>
        
       
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.add.notes,
    glucose: state.add.glucoseInput,
    breadUnits: state.add.breadUnitsInput,
    insulin: state.add.insulinInput,
    date: state.add.dateInput,
    time: state.add.timeInput,
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(addActions, dispatch) };
};

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 20,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);