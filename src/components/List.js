import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import ListItem from "./ListItem";

class List extends Component {

componentWillMount(){
  this.props.actions.sort_notes();
}

  render() {
    const { 
      notes, 
      modal, 
      glucoseSelected, 
      indexSelected } = this.props;
    return (
        <View>

            { notes.map((item, index) => (
              <ListItem 
              notes={notes}
              key={index} 
              glucose={item.glucose} 
              breadUnits={item.breadUnits}
              insulin={item.insulin}
              date={item.date}
              time={item.time}
              index={index}
              modal={modal} 
              glucoseSelected={glucoseSelected}
              indexSelected={indexSelected}/>
          ))}

      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch)};
};

export default connect(null, mapDispatchToProps)(List);
