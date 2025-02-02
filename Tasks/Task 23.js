import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyClass_Task23 from '../Components/MyClassComponent_Task23';

class Task23 extends Component {
    constructor() {
        super();
        this.state = {
            pageContent: ""
        }
    }

    setPageContent = (value) => {
        this.setState({pageContent : value})
    }

    render() {
        return (
            <View style={styles.container}>
                <MyClass_Task23 changeContent={this.setPageContent} />
                <Text style={styles.header}>My Page</Text>
                <Text style={styles.pageText}>{this.state.pageContent}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
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
    },
});

export default Task23