import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

function Task27() {
    const [imageSrc, changeImage] = useState(require("../Resources/whiteBackground.png"));

    const changeImageSrc = (source) => {
        changeImage(source);
    }

    const alertDisplay = () => {
        Alert.alert("Image Display", "Choose which image to display:", 
            [
                {text: "Cake", onPress: () => changeImageSrc(require("../Resources/cake.jpg"))},
                {text: "Cupcake", onPress: () => changeImageSrc(require("../Resources/cupcake.jpg"))},
                {text: "Cakepop", onPress: () => changeImageSrc(require("../Resources/cakepop.jpg"))}
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={imageSrc} />

            <Button 
            title="Choose Image to Display"
            color="#ab0043"
            onPress={alertDisplay} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderWidth: 2,
        margin: 30,
    }
});

export default Task27