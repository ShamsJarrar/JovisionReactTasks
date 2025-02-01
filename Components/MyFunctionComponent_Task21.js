import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function MyFunctionComponent_Task21() {

    useEffect(() => {
        console.log("MyFunctionPage loaded");

        return() => {
            console.log("MyFunctionPage unloaded");
        };
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.pageText}>This is my function page content!</Text>
        </View>
    );
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

export default MyFunctionComponent_Task21

