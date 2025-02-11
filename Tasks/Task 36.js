import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import randomWordGen from '../Components/randomWordGenerator';

function Task36() {
    const words = Array.from({ length: 100 }, () => randomWordGen(10));

    return (
        <ScrollView style={styles.container}>
            <View style={styles.viewContainer}>
                { words.map((item, index) => (
                    <Text key={index} style={styles.pageText}>
                        {item}
                    </Text>
                )) }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    pageText: {
        color: "#000000",
        fontSize: 20,
        margin: 10,
    }
});

export default Task36;