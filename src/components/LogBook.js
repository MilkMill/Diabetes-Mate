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

class LogBookComponent extends Component {
    state = {
        modal: false,
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
                        LOG BOOK
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
                                        L O G   B O O K
                                    </Text>
                                </View>
                            <View style={styles.border}/>
                        </View>

                        <View alignItems='center'>
                            <TouchableOpacity
                            onPress={this.handleModal}
                            style={styles.backButton}>
                                <Text style={styles.backButtonText}>
                                    BACK
                                </Text>
                             </TouchableOpacity>
                        </View>

                        <ScrollView>
                        {this.props.notes.map((item, i ) => (
                            <TouchableOpacity
                            /* onLongPress ={()=> this.deleteNote(i)} */
                            key={i}
                            style={styles.listItem}>
                        
                                <View style={styles.itemsBlock}>

                                    <View style={styles.measuresItemView}>

                                        <View style={styles.measuresUnit}>
                                            <Text style={styles.leftMeasuresUnit} textAlign='center'>
                                                Glucose
                                            </Text>
                                            <Text style={styles.rightMeasuresUnit} textAlign='center'>
                                                {item.glucose}
                                            </Text>
                                        </View>

                                        <View style={styles.measuresUnit}>
                                            <Text style={styles.leftMeasuresUnit} textAlign='center'>
                                                Bread Units
                                            </Text>
                                            <Text style={styles.rightMeasuresUnit} textAlign='center'>
                                                {item.xe}
                                            </Text>
                                        </View>

                                        <View style={styles.measuresUnit}>
                                            <Text style={styles.leftMeasuresUnit} textAlign='center'>
                                                Insulin
                                            </Text>
                                            <Text style={styles.rightMeasuresUnit} textAlign='center'>
                                                {item.insulin}
                                            </Text>
                                        </View>
                                
                                    </View>

                                    <View style={styles.dateItemView}>
                                        <Text style={styles.dateItem} textAlign='center'>
                                            {item.time}
                                        </Text>
                                        <Text style={styles.dateItem} textAlign='center'>
                                            {item.date}
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
    header: {
        height: 20,
        width: "100%",
        backgroundColor: "black",
    },
    headerText: {
        fontSize: 26,
        marginTop: 10,
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    modalTouch: {
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "#004048",
        margin: 10,
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
    measuresUnit:{
        flexDirection: 'row',
        borderWidth: 1,
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
    leftMeasuresUnit: {
        flex: 1,
        borderRightWidth: 1,
        fontSize: 16,
        padding: 5,
    },
    rightMeasuresUnit: {
        flex: 1,
        fontSize: 16,
        padding: 5,
    },
    dateItem: {
        fontSize: 16,
        padding: 5,
    },


})

export default LogBookComponent;