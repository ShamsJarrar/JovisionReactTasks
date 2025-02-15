import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeText } from "../reduxFiles/modifyTextSliceTask39";

function Component1() {
    const pageText = useSelector((state) => state.pageText.value);
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>

            <TextInput
            style={styles.input}
            editable
            onChangeText={(updatedText) => dispatch(changeText(updatedText))}
            placeholder='Input text here to change content' />

            <Text style={styles.pageText}>{pageText}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 10,
        borderWidth: 2,
    },
    pageText: {
        color: "#000000",
        fontSize: 20,
    }
});

export default Component1;