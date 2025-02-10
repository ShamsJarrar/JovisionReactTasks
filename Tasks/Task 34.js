import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import dateHook from '../Components/dateHook';

function Task34() {
    const {date} = dateHook();
    const [visible, toggleVisibility] = useState(false);

    const changeVisibility = () =>{
        toggleVisibility((visible) => !visible);
    }

    return (
        <View style={styles.container}>

            {visible ? <Text style={styles.textStyle}>{date}</Text>: null}

            <Button 
            title={visible ? "Hide date and time": "Show date and time"}
            color="#ab0043"
            onPress={changeVisibility} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 20,
        color: "#000000"
    }
});

export default Task34;