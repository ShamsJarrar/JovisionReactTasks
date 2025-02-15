import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function textComponent({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.pageText}>{route.params.num}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    pageText: {
        color: "#000000",
        fontSize: 20,
    }
});

export default textComponent;