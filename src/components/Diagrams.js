import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Modal,
    TouchableOpacity
} from 'react-native';

class DiagramsComponent extends Component {
    state = {
        modal: false,
    }

    handleModal = () => {
        alert("Здесь ничего нет")
    }
    render() {
        return(
            <View style={styles.modalView}>
                <TouchableOpacity 
                style={styles.modalTouch}
                onPress={this.handleModal}>                   
                <View>
                    <Text style={styles.modalTouchText}>
                    ГРАФИКИ
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
                        <Text>It is Diagrams Component</Text>
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
        borderBottomWidth: 1,
        borderColor: "#004048",
        margin: 0,
        padding: 10,
        alignItems: 'center',

    },
    modalTouchText: {
        fontSize: 18,
    },
})
export default DiagramsComponent;