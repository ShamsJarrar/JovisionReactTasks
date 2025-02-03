import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Task26() {
    const [content, updateContent] = useState("Press one of the buttons to fetch result");
    const [disable, toggleUI] = useState(false);

    const BlockUI = async() =>{
        toggleUI(true);
        let ft = await fetch("https://api.ipify.org/");
        let ip = await ft.text();
        updateContent(ip);
        toggleUI(false);
    }

    const NonBlockUI = async() =>{
        let ft = await fetch("https://api.ipify.org/");
        let ip = await ft.text();
        updateContent(ip);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{content}</Text>

            <View styles={styles.buttonContainer}>
                <Button
                title="Block UI while fetching"
                color="#dc0000"
                onPress={BlockUI}
                disabled={disable} />

                <Button
                title= "Don't block UI while fetching"
                color= "#17ab00"
                onPress= {NonBlockUI}
                disabled={disable} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000",
    },
    buttonContainer: {
        justifyContent: "space-between"
    }
});

export default Task26