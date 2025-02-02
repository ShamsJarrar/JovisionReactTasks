import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function MyFunctionComponent_Task22(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit My Function Page</Text>

            <TextInput 
            style={styles.input}
            multiline
            editable
            numberOfLines={5}
            onChangeText={props.changeContent}
            placeholder='Type here to change page content!'/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        padding: 30,
        margin: 20,
    },
    header: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000",
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 10,
        padding: 5,
        width: 250,
    },
});

export default MyFunctionComponent_Task22