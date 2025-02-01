import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MyFunctionComponent_Task22 from '../Components/MyFunctionComponent_Task22';

function Task22() {
    const [pageContent, setContent] = useState("Input Page Content Here!");

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            multiline
            editable
            numberOfLines={5}
            onChangeText={setContent}
            value={pageContent}
            />

            <MyFunctionComponent_Task22 content={pageContent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Text: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000",
    },
    input: {
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 10,
        padding: 5,
        width: 250,
    }
});

export default Task22;