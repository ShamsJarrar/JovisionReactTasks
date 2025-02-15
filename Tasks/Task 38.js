import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Component2 from "../Components/Component2_task38";
import { textContext } from "../Components/textContext";

function Task38() {
    const [text, setText ] = useState("Text Here");

    return (
        <View style={styles.container}>
            <textContext.Provider value = {{text, setText}}>
                <Component2 />
                <Component2 />
                <Component2 />
                <Component2 />
            </textContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Task38;