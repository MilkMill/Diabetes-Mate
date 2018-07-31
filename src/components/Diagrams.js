import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Modal,
    TouchableOpacity
} from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


class DiagramsComponent extends Component {
    state = {
        modal: false,
        glucose: this.props.glucose, 
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false,
            glucose: this.props.glucose
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
                    <AreaChart
                    style={{ height: 200 }}
                    data={ this.props.glucose }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                      >
                <Grid/>
            </AreaChart>
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