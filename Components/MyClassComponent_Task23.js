import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class MyClass_Task23 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Edit My Class Page</Text>
    
                <TextInput 
                style={styles.input}
                multiline
                editable
                numberOfLines={5}
                onChangeText={this.props.changeContent}
                placeholder='Type here to change page content!'/>
                    
            </View>
        );
    }
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

export default MyClass_Task23