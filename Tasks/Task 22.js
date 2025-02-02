import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyFunctionComponent_Task22 from '../Components/MyFunctionComponent_Task22';

function Task22() {
    const [pageContent, setContent] = useState("");

    return (
        <View style={styles.container}>
            <MyFunctionComponent_Task22 changeContent={setContent} />
            <Text style={styles.header}>My Page</Text>
            <Text style={styles.pageText}>{pageContent}</Text>
        </View>
    );
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

export default Task22;