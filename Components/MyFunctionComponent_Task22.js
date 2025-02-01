import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function MyFunctionComponent_Task22(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Function Page</Text>
            <Text style={styles.pageText}>{props.content}</Text>
        </View>
    );
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

export default MyFunctionComponent_Task22