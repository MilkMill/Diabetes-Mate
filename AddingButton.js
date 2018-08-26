import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as addActions from "../actions/add";


class Measures extends Component {

  onPressSave = () => {

    if(this.props.glucose.trim().length > 0 ||
    this.props.breadUnits.trim().length > 0 ||
    this.props.insulin.trim().length > 0 ) {
    this.props.actions.make_note(
        this.props.glucose, 
        this.props.breadUnits, 
        this.props.insulin,
        this.props.date,
        this.props.time,
    )
    this.props.actions.make_empty()
    }
    else{
        alert('Введите значение!')
    }
  }

  render(){
      return(
        <View style={styles.savingButtonView}>

          <TouchableOpacity
          onPress={this.onPressSave}>
          
              <Text style={styles.savingButtonText}>
                  SAVE DATA TO REDUX
              </Text>

          </TouchableOpacity>
          
        </View>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(addActions, dispatch) };
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


export default connect(null, mapDispatchToProps)(Measures);