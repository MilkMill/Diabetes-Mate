import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Modal,
    TouchableOpacity
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
                    onRequestClose = {() => {alert('onRequestClose')}}
                    >
                    <View style={{
                        marginTop: 20,
                        backgroundColor:'red'
                    }}
                    >
                        <Text>It is Modal Component</Text>
                    </View>
                    <Button
                        title='Back to Inputs'
                        onPress={this.handleModal}
                        />
                </Modal>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
 
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
})

export default LogBookComponent;