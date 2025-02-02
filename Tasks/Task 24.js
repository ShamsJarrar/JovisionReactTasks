import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyFunctionComponent_Task24 from '../Components/MyFunctionComponent_Task24';

function Task24() {
    const pageRef = useRef(null);

    return (
        <View style={styles.container}>
            <TextInput
            multiline
            editable
            numberOfLines={4}
            onChangeText={pageRef.current.setText}
            style={styles.input} />

            <MyFunctionComponent_Task24 ref={pageRef}></MyFunctionComponent_Task24>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    input: {
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 10,
        marginLeft: 10,
        padding: 5,
        width: 250,
    }
});

export default Task24