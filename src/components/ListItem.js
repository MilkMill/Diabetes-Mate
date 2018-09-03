import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity , Button, Modal} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import ListItemRewrite from "../containers/ListItemRewrite";
import ListMeasuresItem from './ListMeasuresItem';

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
        index,
        glucose,
        breadUnits,
        insulin,
        date,
        time,
        modal,
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

            <ListMeasuresItem
              thing={glucose}
              type="glucose"
            />
                  
            <ListMeasuresItem
              thing={breadUnits}
              type="breadUnits"
            />
            
            <ListMeasuresItem
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


ListItem.propTypes = {
  index: PropTypes.number,
  glucose: PropTypes.string,
  breadUnits: PropTypes.string,
  insulin: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  modal: PropTypes.bool,
  indexSelected: PropTypes.number,
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
