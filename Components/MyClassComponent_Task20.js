import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MyClassComponent_Task20 extends Component {
    componentDidMount() {
        console.log("My class loaded!");
    }

    componentWillUnmount() {
        console.log("My class unloaded!");
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageText}>This is my custom class content!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    pageText: {
        textAlign: "center",
        fontSize: 20,
        color: "#000000",
    }
});

export default MyClassComponent_Task20