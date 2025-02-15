import React, { useContext } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Component1 from "./Component1_task38";
import { textContext } from "./textContext";

function Component2() {
    const { text, setText } = useContext(textContext);
    
    return (
        <View style={styles.container}>

            <TextInput
            style={styles.input}
            editable
            onChangeText={setText}
            placeholder='Input text here to change content' />

            <Component1 />

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
});

export default Component2;