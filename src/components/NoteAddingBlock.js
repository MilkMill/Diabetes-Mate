import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Measures from './Measures'
import AddingButton from './AddingButton';

class NoteAddingBlock extends Component {

  render() {
    const { glucose, breadUnits, insulin, date, time } = this.props;
 
    return (
      <View>
        <Measures glucose={glucose} breadUnits={breadUnits} insulin={insulin} date={date} time={time}/>
        <AddingButton glucose={glucose} breadUnits={breadUnits} insulin={insulin} date={date} time={time}/>
      </View>

    );
  }
}

export default NoteAddingBlock;
