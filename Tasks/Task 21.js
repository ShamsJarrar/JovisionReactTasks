import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import MyFunctionComponent_Task21 from '../Components/MyFunctionComponent_Task21';

function Task21() {
    const [showFunction, toggleFunctionDisplay] = useState(false);

    return (
        <View style={styles.container}>
            {showFunction ? <MyFunctionComponent_Task21 /> : null}

            <Button 
            title = {showFunction ? "Hide" : "Show"}
            color = "#1591ea"
            onPress = {() => toggleFunctionDisplay((showFunction) => !showFunction)} />
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
    }
});

export default Task21
