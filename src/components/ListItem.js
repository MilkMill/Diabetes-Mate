import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity , Button, Modal} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import ListItemRewrite from "../containers/ListItemRewrite";
import MeasuresItem from './MeasuresItem';

class ListItem extends Component {

  handleModalOpen = () => {
    this.props.actions.boolean_modal(this.props.modal);
    this.props.actions.remember_values_that_index(this.props.notes, this.props.index);
  }

  handleModalClose = () => {
    this.props.actions.boolean_modal(this.props.modal);
    this.props.actions.sort_notes();
    this.props.actions.make_empty_again();
  }

  render() {
    const { 
        notes,
        index,
        glucose,
        breadUnits,
        insulin,
        date,
        time,
        modal,
        glucoseSelected,
        indexSelected
    } = this.props;

    return (
      <View>
        <TouchableOpacity
        onLongPress={this.handleModalOpen}
        key={index}
        >
        <View style={styles.itemView}>

          <View style={styles.measuresItemsView}>

            <MeasuresItem
              thing={glucose}
              type="glucose"
            />
                  
            <MeasuresItem
              thing={breadUnits}
              type="breadUnits"
            />
            
            <MeasuresItem
              thing={insulin}
              type="insulin"
            />

          </View>

          <View style={styles.dateItemsView}>
            <Text style={styles.noteText}>{date}</Text>
            <Text style={styles.noteText}>{time}</Text>
          </View>  
          
        </View>

      </TouchableOpacity>

      <Modal
        visible={modal}
        animationType={'fade'}
        onRequestClose={this.handleModalClose}>

      <ListItemRewrite 
        indexSelected={indexSelected} 
        modal={modal} />

      </Modal>      
      </View>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch)};
};

const styles = StyleSheet.create({
    itemView: {
      padding: 5,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: 'white',
      borderColor: 'gray',
    },
        measuresItemsView: {
         /*  backgroundColor: "#ccecce", */
          flex: 1,
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          justifyContent: 'center',
        },
              measureItem: {
                flexDirection: "row",
                marginBottom: 1,
              },
                    measureItemTitle: {
                      flex: 1,
                    },
                    measureItemValue: {
                      flex: 1,
                    },
        dateItemsView: {
          flex: 1,
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
        },
                      noteText: {
                        fontSize: 18,
                      }
  });


  
  export default connect(null, mapDispatchToProps)(ListItem);
