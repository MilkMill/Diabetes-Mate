import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as addActions from "../actions/add";

class ListItem extends Component {

  render() {
    const { 
        index,
        glucose,
        breadUnits,
        insulin,
        date,
        time
    } = this.props;
    return (
        <TouchableOpacity
        
        key={index}
        >
        <View style={styles.itemView}>

          <View style={styles.measuresItemsView}>

            <View style={styles.measureItem}>
              {/* GLUCOSE */}
              <View style={styles.measureItemTitle}>
                {glucose !== undefined 
                  && glucose !== '' 
                  && glucose.toString() !== "0" 
                  ? <Text style={styles.noteText}>Glucose: </Text> 
                  :  <View></View>}
              </View>

              <View style={styles.measureItemValue}>
                {glucose !== undefined 
                  && glucose !== '' 
                  && glucose.toString() !== "0" 
                  ? <Text style={styles.noteText}>{glucose}</Text> 
                  :  <View></View>}
              </View>

            </View>
                  
            {/* BREAD_UNITS */}
            <View style={styles.measureItem}>

              <View style={styles.measureItemTitle}>
                {breadUnits !== undefined 
                  && breadUnits !== '' 
                  && breadUnits.toString() !== "0" 
                  ? <Text style={styles.noteText}>Bread Units: </Text> 
                  :  <View></View>}
              </View>

              <View style={styles.measureItemValue}>
                {breadUnits !== undefined 
                  && breadUnits !== '' 
                  && breadUnits.toString() !== "0" 
                  ? <Text style={styles.noteText}>{breadUnits}</Text> 
                  :  <View></View>}
              </View>

            </View>

            {/* INSULIN */}
            <View style={styles.measureItem}>

              <View style={styles.measureItemTitle}>
                {insulin !== undefined 
                  && insulin !== '' 
                  && insulin.toString() !== "0" 
                  ? <Text style={styles.noteText}>Insulin: </Text> 
                  :  <View></View>}
              </View>

              <View style={styles.measureItemValue}>
                {insulin !== undefined 
                  && insulin !== '' 
                  && insulin.toString() !== "0" 
                  ? <Text style={styles.noteText}>{insulin}</Text> 
                  :  <View></View>}
              </View>

            </View>

          </View>  

          <View style={styles.dateItemsView}>
            <Text style={styles.noteText}>{date}</Text>
            <Text >{time}</Text>
          </View>  
          
        </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create( {
    default: {

    },
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


  
  export default ListItem;