import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import ListItem from "./ListItem";

class List extends Component {

  render() {
    const { title, notes, modal, glucoseSelected } = this.props;
    return (
        <View>
            {console.log(modal + " modal")}
            <View style={{borderTopWidth:1}} />

            {notes.map((item, index) => (
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
            glucoseSelected={glucoseSelected}/>
          ))}

      </View>
    );
  }
}

export default List;