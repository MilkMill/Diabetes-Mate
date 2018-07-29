import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Modal,
    TouchableOpacity,
    ScrollView
} from 'react-native';

class LogComponent extends Component {

    render() {
        return(
                <View>

                    {this.props.log.map((item, i ) => (
                            
                        <TouchableOpacity
                        key={i}
                        style={styles.listItem}>
                        <View style={styles.itemsBlock}>

                            <View style={styles.measuresItemView}>
                                <Text style={styles.item}>
                                {item.glucose == null || item.glucose == '1.0' ? '' : 'Сахар: ' + item.glucose}
                                </Text>
                                <Text style={styles.item}>
                                {item.bu == null || item.bu == '1.0' ? '' : 'ХЕ: ' + item.bu}
                                </Text>

                                <Text style={styles.item}>
                                {item.insulin == null || item.insulin == '1.0' ? '' : 'Инсулин: ' + item.insulin}
                                </Text>
                            </View>

                            <View style={styles.dateItemView}>
                                <Text
                                style={styles.dateItem}
                                textAlign='center'>
                                {item.time}
                                </Text>
                                <Text 
                                style={styles.dateItem}
                                textAlign='center'>
                                {this.props.log[i].date.split('.')[0]  == this.props.day.toString() ? 'Today' : item.date}
                                </Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                    ))}

              </View>
        )
    }
}

const styles=StyleSheet.create({

    globalView: {
        width: '100%',
    },
    modalsView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: 'white',
        padding: 5,
    },
    textInput: {

        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        fontSize: 18,
        fontWeight: '100',
        width: 80,

    },
    sliderInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    sliderView: {
        marginTop: 10,
        marginBottom: 0,
        borderWidth: 2,
        borderColor: "#003840",
        borderRadius: 50,
        backgroundColor: "white",
        alignContent: 'center',
        padding: 10,
        width: '70%'
    },
    slider:{
        width:'100%',
        padding: 5,
        
    },
    saveData:{
        marginTop: 20,
        marginBottom: 40,
        width: '100%',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderBottomColor: "#004048",
        borderTopColor: "#004048",
        backgroundColor: "white",
        alignContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    savingButtonText:{
        fontSize: 18,
        fontWeight: '100',
    },
    latestView: {
        borderTopWidth: 3, 
        borderTopColor: '#004048',
        width: '100%',
    },
    latest: {
        fontSize: 20,
        fontWeight: '100',
    },
    listItem: {
        width:'100%'
    },
    itemsBlock: {
        flex:1,
        marginTop: 3,
        marginBottom: 3, 
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: "#003840",
        borderTopColor: "#003840",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: 'white',

    },
    measuresItemView: {
        backgroundColor: "white",
        flex:1,
        justifyContent: 'center',
        margin: 1,
    },
    dateItemView: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    item: {
        fontSize: 16,
        padding: 5,
    },
    dateItem: {
        fontSize: 16,
        padding: 5,
    },
    stringNoteDate: {
        fontSize: 18,
    },
    stringNote: {
        fontSize: 16,
        flex: 1,
    }
})

export default LogComponent;