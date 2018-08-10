import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity , Button, Modal} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as addActions from "../actions/add";

class ListItem extends Component {

    deleteNote = () => {
        this.props.actions.delete_note(this.props.indexSelected)
    }

  render() {
    const { 
        notes,
        indexSelected,
    } = this.props;

    return (
      <View>
        <Button title="DELETE" onPress={this.deleteNote} />
      </View>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(addActions, dispatch)};
};

const styles = StyleSheet.create({
    itemView: {
      padding: 5,
      borderBottomWidth: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: 'white',
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
