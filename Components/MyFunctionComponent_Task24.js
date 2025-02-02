import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MyFunctionComponent_Task24 = forwardRef((props, ref) => {
    const [content, setContent] = useState("");

    useImperativeHandle(ref, () => {
        return {
            setText: (value) => setContent(value)
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Function Page</Text>
            <Text style={styles.pageText}>{content}</Text>
        </View>
    );
})

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

export default MyFunctionComponent_Task24