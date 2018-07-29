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
import LogComponent from './Log';

class LogBookComponent extends Component {
    state = {
        modal: false,
        log : this.props.log,
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false
        })
    }
    render() {
        return(
            <View style={styles.modalView}>
                <TouchableOpacity 
                style={styles.modalTouch}
                onPress={this.handleModal}>   
                    <View>
                        <Text style={styles.modalTouchText}>
                        ЖУРНАЛ
                        </Text>
                    </View>
                </TouchableOpacity>

                <Modal
                visible={this.state.modal}
                animationType={'fade'}
                onRequestClose = {() => {this.handleModal}}>
                
                    <View
                    style={styles.modalWindow}
                    alignContent="center">
                        <View>
                            <View style={styles.headerView} alignItems= 'center'>
                                <View style={styles.header}/>
                                    <Text style={styles.headerText}>
                                        ЖУРНАЛ
                                    </Text>
                                </View>
                            <View style={styles.brdr}/>
                        </View>

                        <View alignItems='center'>
                            <TouchableOpacity
                            onPress={this.handleModal}
                            style={styles.backButton}>
                                <Text style={styles.backButtonText}>
                                    НАЗАД
                                </Text>
                             </TouchableOpacity>
                        </View>

                        <ScrollView>
                        {
                        this.props.log.map((item, i ) => (
                            
                        <TouchableOpacity
                            onLongPress ={()=> this.deleteNote(i)}
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
                                {this.props.log[i].date.split('.')[0]  == this.props.dayInput.toString() ? 'Today' : item.date}
                                </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                        </ScrollView>

                    </View>

                </Modal>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {

    },
    headerView: {

    },
    header: {
        height: 20,
        width: "100%",
        backgroundColor: "black",
    },
    headerText: {
        fontSize: 26,
        marginTop: 10,
    },
    brdr:{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    modalTouch: {
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "#004048",
        margin: 0,
        padding: 10,
        alignItems: 'center',

    },
    modalTouchText: {
        fontSize: 18,
    },
    modalWindow:{
        backgroundColor: "#987878",
        alignContent: 'center',
        height: '100%'
    },
    backButton: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: "#B03008",
        borderRadius: 3,
        backgroundColor: "white",
        alignContent: 'center',
        padding: 8,
    },
    backButtonText: {
        fontSize: 16,

    },

    itemsBlock: {
        marginTop: 3, 
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    measuresItemView: {
        backgroundColor: "white",
        flex:1,
        borderWidth: 2,
        justifyContent: 'center',
        margin: 1,
        alignItems: 'center',
        alignContent: 'center',
    },

    dateItemView: {
        backgroundColor: "white",
        flex: 1,
        borderWidth: 3,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    dateItem: {
        fontSize: 16,
        padding: 5,
    },
    modalsView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: 'white',
        padding: 5,
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
    stringNote: {
        fontSize: 16,
        flex: 1,
    }


})

export default LogBookComponent;