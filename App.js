import React from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    AsyncStorage,
    Button,
    TextInput,
    Keyboard,
    Platform
     } from 'react-native';


const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        glucose: '',
        breadUnits: '',
        insulin: '',
        date: '',
        notes: [],
    }
}

    changeGlucoseHandler = glucose => {
        this.setState({ glucose: glucose });
    };

    changeBuHandler = breadUnits => {
        this.setState({ breadUnits: breadUnits });
    };

    changeInsulinHandler = insulin => {
        this.setState({ insulin: insulin});
    };


    addNote = () => {
        let notEmpty = this.state.glucose.trim().length > 0 || this.state.breadUnits.trim().length || this.state.insulin.trim().length > 0;
        
        let newDate = new Date();
        
        let date1 = newDate.getDate() + '.' +
        (newDate.getMonth() + 1) + '.' +
        newDate.getFullYear();

        this.setState({ date: date1 })

        if (notEmpty) {
            this.setState(
                prevState => {
                    let { notes, glucose, breadUnits, insulin, date } = prevState;
                    return {
                        notes: notes.concat({ key: notes.length, glucose: glucose }),

                        glucose: "",
                        breadUnits: '',
                        insulin: '',
                        date: '',
                    };
                },
                () => Notes.save(this.state.notes)
            );
        }
    };

  deleteNote = i => {
    this.setState(
      prevState => {
        let notes = prevState.notes.slice();

        notes.splice(i, 1);

        return { notes: notes };
      },
      () => Notes.save(this.state.notes)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Notes.all(notes => this.setState({ notes: notes || [] }));
  }



render(){
    return(
        
        <View style={styles.view}>
        <View style={styles.header}/>
          
            <TextInput 
            style={styles.textInput}
            onChangeText={this.changeGlucoseHandler}
            value={this.state.glucose}
            placeholder="Add Glucose"
            placeholderTextColor='black'
            textAlign='center'
            keyboardType='numeric'
            />
           
            <TextInput 
            style={styles.textInput}
            onChangeText={this.changeBuHandler}
            value={this.state.breadUnits}
            placeholder="Add Bread units"
            placeholderTextColor='black'
            textAlign='center'
            keyboardType='numeric'
            />

            <TextInput 
            style={styles.textInput}
            onChangeText={this.changeInsulinHandler}
            value={this.state.insulin}
            placeholder="Add insulin injected"
            placeholderTextColor='black'
            textAlign='center'
            keyboardType='numeric'
            />

            <Button 
            title='Save data'
            onPress={this.addNote} />
         
         <FlatList
          style={styles.list}
          data={this.state.notes}
          renderItem={({ item, index }) =>
            <View>
                <View style={styles.listItemContainer}>
                    <View style={styles.listItemComponent}>
                        <Text style={styles.listItem}>
                        {item.date}
                        </Text>
                        <Text style={styles.listItem}>
                        glucose: {item.glucose}
                        </Text>
                        <Text style={styles.listItem}>
                        breadUnits: {item.breadUnits}
                        </Text>
                        <Text style={styles.listItem}>
                        insulin: {item.insulin}
                        </Text>
                    </View>
                        <Button title="X" onPress={() => this.deleteNote(index)} />
                </View>
              <View style={styles.hr} />
            </View>}/>
            </View>        
    );
}
}

let Notes = {
    convertToArrayOfObject(notes, callback) {
      return callback(
        notes ? notes.split("||").map((note, i) => ({ key: i, glucose: note })) : []
      );
    },
    convertToStringWithSeparators(notes) {
      return notes.map(note => note.glucose).join("||");
    },
    all(callback) {
      return AsyncStorage.getItem("NOTES", (err, notes) =>
        this.convertToArrayOfObject(notes, callback)
      );
    },
    save(notes) {
      AsyncStorage.setItem("NOTES", this.convertToStringWithSeparators(notes));
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      padding: viewPadding,
      paddingTop: 20
    },
    header: {
        height: 20,
        backgroundColor: 'black'
    },
    list: {
      width: "100%"
    },
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 12
    },
    hr: {
      height: 1,
      backgroundColor: "gray"
    },
    listItemComponent: {
      flexDirection: "column",
    padding: 0,
    margin: 0,
    },
    listItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
      height: 40,
      paddingRight: 10,
      paddingLeft: 10,
      borderColor: "gray",
      borderWidth: isAndroid ? 0 : 1,
      width: "100%"
    }
  });