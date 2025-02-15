import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function textComponent1({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.pageText}>Page 1</Text>

            <Button title="Go to page 2" color="#ab0043" onPress={() => navigation.navigate("Page 2")} />
            <Button title="Go to page 3" color="#ab0043" onPress={() => navigation.navigate("Page 3")} />
            <Button title="Go to page 4" color="#ab0043" onPress={() => navigation.navigate("Page 4")} />
            
        </View>
    );
}

export function textComponent2({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.pageText}>Page 2</Text>

            <Button title="Go to page 1" color="#ab0043" onPress={() => navigation.navigate("Page 1")} />
            <Button title="Go to page 3" color="#ab0043" onPress={() => navigation.navigate("Page 3")} />
            <Button title="Go to page 4" color="#ab0043" onPress={() => navigation.navigate("Page 4")} />

        </View>
    );
}

export function textComponent3({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.pageText}>Page 3</Text>

            <Button title="Go to page 1" color="#ab0043" onPress={() => navigation.navigate("Page 1")} />
            <Button title="Go to page 2" color="#ab0043" onPress={() => navigation.navigate("Page 2")} />
            <Button title="Go to page 4" color="#ab0043" onPress={() => navigation.navigate("Page 4")} />
            
        </View>
    );
}

export function textComponent4({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.pageText}>Page 4</Text>

            <Button title="Go to page 1" color="#ab0043" onPress={() => navigation.navigate("Page 1")} />
            <Button title="Go to page 2" color="#ab0043" onPress={() => navigation.navigate("Page 2")} />
            <Button title="Go to page 3" color="#ab0043" onPress={() => navigation.navigate("Page 3")} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    pageText: {
        color: "#000000",
        fontSize: 40,
    }
});