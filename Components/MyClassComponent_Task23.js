import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MyClass_Task23 extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.header}>My Class Page</Text>
                    <Text style={styles.pageText}>{this.props.content}</Text>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
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

export default MyClass_Task23