import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MyClassComponent_Task19 from '../Components/MyClassComponent_Task19';

class Task19 extends Component {
    constructor() {
        super();
        this.state = {
            showClass: false
        }
    }

    toggleClassDisplay = () => {
        this.setState(prevState => ({ showClass: !prevState.showClass}))
    }

    render() {
        return (
            <View style={styles.container}>

                {this.state.showClass ? <MyClassComponent_Task19></MyClassComponent_Task19> : null}

                <Button 
                title = {this.state.showClass ? "Hide" : "Show"} 
                color = "#1591ea" 
                onPress={this.toggleClassDisplay} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Text: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000",
    }
});

export default Task19