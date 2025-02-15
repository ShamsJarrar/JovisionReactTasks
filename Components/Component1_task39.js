import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { textContext } from './textContext';

class Component1 extends Component {
    static contextType = textContext;

    render() {
        const { text, setText } = this.context;
        return (
            <Text style={styles.pageText}>{text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    pageText: {
        color: "#000000",
        fontSize: 20,
    }
});

export default Component1;