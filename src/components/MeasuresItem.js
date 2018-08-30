import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity , Button, Modal} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

import ListItemRewrite from "../containers/ListItemRewrite";

class ListItem extends Component {

  render() {
    const { 
      thing,
      type,
    } = this.props;

    return (

        <View style={styles.measureItem}>
            
            <View style={styles.measureItemTitle}>
                {thing !== undefined 
                && thing !== '' 
                && thing.toString() !== "0" 
                ? 
                    <Text style={styles.noteText}>
                      {
                        type === "glucose" ? "Glucose: " :
                            type === "breadUnits" ? "BreadUnits: " :
                                "Insulin: "
                      }
                    </Text> 
                : 
                    <View></View>}
            </View>

            <View style={styles.measureItemValue}>
                {thing !== undefined 
                && thing !== '' 
                && thing.toString() !== "0" 
                ? 
                    <Text style={styles.noteText}>{thing}</Text> 
                :  
                    <View></View>}
            </View>

        </View>
                  
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch)};
};

const styles = StyleSheet.create({
    
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
