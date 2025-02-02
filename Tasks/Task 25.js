import React, { Component, createRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyClassComponent_Task25 from '../Components/MyClassComponent_Task25';

class Task25 extends Component {
    constructor() {
        super();
        this.pageRef = createRef();
    }

    setMyClass = (value) =>{
        this.pageRef.current.setPageContent(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                multiline
                editable
                numberOfLines={4}
                onChangeText={this.setMyClass}
                style={styles.input}
                placeholder='Input Text here to change page content!' />
    
                <MyClassComponent_Task25 ref={this.pageRef} />
            </View>
        );
    }
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

export default Task25