import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class Task16 extends Component {
    constructor(){
        super();
        this.state = {
            showText: false
        }
    }

    toggleText = () =>{
        this.setState(prevState => ({showText: !prevState.showText}))
    }

    render(){
        return(
            <View style = {styles.container}>

                {this.state.showText ? <Text style = {styles.Text}>Shams</Text> : null}

                <Button 
                title = "Show" 
                color = "#1591ea"
                onPress={this.toggleText} />

            </View>
    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
    },
    Text: {
        fontsize: 15,
        textAlign: "center",
        fontFamily: "sans-serif"
    },
});

export default Task16