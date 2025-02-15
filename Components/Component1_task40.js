import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { connect } from "react-redux";  
import { changeText } from "../reduxFiles/modifyTextSliceTask39";

class Component1 extends Component {
    render() {
        const { pageText, dispatch } = this.props;

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
}

const mapStateToProps = (state) => ({
    pageText: state.pageText.value
});

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

export default connect(mapStateToProps)(Component1);
