import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert, Image, Pressable } from 'react-native';

function Task28() {

    const data = [
        require("../Resources/Algeria.png"),
        require("../Resources/Egypt.png"),
        require("../Resources/Iraq.png"),
        require("../Resources/Jordan.png"),
        require("../Resources/Kuwait.png"),
        require("../Resources/Lebanon.png"),
        require("../Resources/Palestine.png"),
        require("../Resources/Qatar.png"),
        require("../Resources/Saudi.png"),
        require("../Resources/UAE.png")
    ]

    const showIndex = (index) => {
        Alert.alert("Image Index", "You have selected image: " + index);
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            horizontal
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
                <Pressable onPress={() => showIndex(index)}>
                    <Image style={styles.image} source={item} />
                </Pressable>
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    image: {
        width: 30,
        height: 20,
        borderWidth: 2,
        margin: 5,
    }
});

export default Task28