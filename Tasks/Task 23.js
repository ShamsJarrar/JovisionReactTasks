import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MyClass_Task23 from '../Components/MyClassComponent_Task23';

class Task23 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageContent: "Input Page Content Here!"
        }
    }

    setPageContent = (value) => {
        this.setState({pageContent : value})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                style={styles.input}
                multiline
                editable
                numberOfLines={5}
                onChangeText={this.setPageContent}
                value={this.state.pageContent}
                />
    
                <MyClass_Task23 content={this.state.pageContent} />
            </View>
        );
    }
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

export default Task23