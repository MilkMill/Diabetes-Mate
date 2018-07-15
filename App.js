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
        date: [],
        notes: [],
    }
}

changeTextHandler = glucose => {
    this.setState({ glucose: glucose });
  };

  addTask = () => {
    let notEmpty = this.state.glucose.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { notes, glucose } = prevState;
          return {
            notes: notes.concat({ key: notes.length, glucose: glucose }),
            glucose: ""
          };
        },
        () => Notes.save(this.state.notes)
      );
    }
  };

  deleteTask = i => {
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
          
            <TextInput 
            style={styles.textInput}
            onChangeText={this.changeTextHandler}
            onSubmitEditing={this.addTask}
            value={this.state.text}
            placeholder="Add Glucose"
            placeholderTextColor='#black'
            textAlign='center'
            returnKeyType="done"
            returnKeyLabel="done"
             />
            <Button 
            title='Add to data'
            onPress={this.addTask} />
         
         <FlatList
          style={styles.list}
          data={this.state.notes}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.glucose}
                </Text>
                <Button title="X" onPress={() => this.deleteTask(index)} />
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
    list: {
      width: "100%"
    },
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 18
    },
    hr: {
      height: 1,
      backgroundColor: "gray"
    },
    listItemCont: {
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
  
  AppRegistry.registerComponent("TodoList", () => TodoList);