import React, {Component} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class Task17 extends Component {
    constructor() {
        super();
        this.state = {
            showText: false
        }
    }

    toggleText = () => {
        this.setState(prevState => ({showText: !prevState.showText}))
    }

    render() {
        return (
            <View style = {styles.container}>
                {
                    this.state.showText ? <Text style = {styles.Text}>Shams</Text> : null
                }

                <Button 
                title = {this.state.showText ? "Hide" : "Show"} 
                color = "#1591ea" 
                onPress={this.toggleText} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dfbeb7",
    },
    Text: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000",
    }
});

export default Task17
