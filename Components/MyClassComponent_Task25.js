import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MyClassComponent_Task25 extends Component {
    constructor() {
        super();
        this.state = {
            content: ""
        }
    }

    setPageContent = (value) => {
        this.setState({content: value})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>My Class Page</Text>
                <Text style={styles.pageText}>{this.state.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    pageText: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000",
        marginTop: 20,
    },
    header: {
        textAlign: "center",
        fontSize: 25,
        color: "#000000",
        fontWeight: "bold",
    }
});

export default MyClassComponent_Task25