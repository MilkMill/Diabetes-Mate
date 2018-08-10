import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import ListItem from "./ListItem";

class List extends Component {

  render() {
    const { title, notes } = this.props;
    return (
        <View>

            <View style={{borderTopWidth:1}} />

            {notes.map((item, index) => (
            <ListItem 
            key={index} 
            glucose={item.glucose} 
            breadUnits={item.breadUnits}
            insulin={item.insulin}
            date={item.date}
            time={item.time}
            index={index} />
          ))}

      </View>
    );
  }
}

export default List;