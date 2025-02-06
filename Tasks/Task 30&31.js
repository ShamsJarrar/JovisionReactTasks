import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Alert, Image, Pressable, Button, TextInput } from 'react-native';

function Task30_31() {
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

    const listRef = useRef(null);
    const [inputText, setInput] = useState("");
    const [images, toggleImageDisplay] = useState(data);

    const scrollList = () => {
        let ind = parseInt(inputText);
        if(isNaN(ind) || ind < 0 || ind > 9){
            Alert.alert("Error", "Invalid index entered! Only enter numbers between 0-9!");
        }
        else{
            listRef.current.scrollToIndex({index: ind, viewPosition: 0.5});
        }
    }

    const showIndex = (index) => {
        Alert.alert("Image Index", "You have selected image: " + index);
    }

    const removeImage = (index) => {
        const filteredImages = images.filter((item, i) =>
        i != index);
        toggleImageDisplay(filteredImages);
    }

    const addImage = (item, index) => {
        const modifiedImages = [...images];
        modifiedImages.splice(index+1, 0, item);
        toggleImageDisplay(modifiedImages);
    } 

    return (
        <View style={styles.container}>

            <FlatList
            ref={listRef}
            data={images}
            horizontal
            keyExtractor={(item, index) => index}
            style={{flexGrow: 1}}
            renderItem={({item, index}) => (
                <View style={styles.listContainer}>

                    <Pressable onPress={() => showIndex(index)}>
                        <Image style={styles.image} source={item} />
                    </Pressable>

                    <Pressable style={styles.removeIconContainer} onPress={() => removeImage(index)}>
                        <Image style={styles.removeIcon} source={require("../Resources/red-x-icon.png")} />
                    </Pressable>

                    <Pressable style={styles.addIconContainer} onPress={() => addImage(item, index)}>
                        <Image style={styles.addIcon} source={require("../Resources/green-plus-icon.png")} />
                    </Pressable>
                </View>
            )} />

            <TextInput
            style={styles.input}
            editable
            onChangeText={setInput}
            placeholder='Enter Index you want to scroll to (0-9)' />
            
            <Button 
            title="Confirm"
            color="#ab0043"
            onPress={scrollList} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    listContainer: {
        position: "relative",
    },
    removeIconContainer: {
        position: "absolute",
        top: 69,
        right: 8,
    },
    addIconContainer: {
        position: "absolute",
        top: 69,
        left: 2,
    },
    image: {
        width: 170,
        height: 100,
        borderWidth: 2,
        marginRight: 5,
    },
    removeIcon: {
        width: 30,
        height: 30,
    },
    addIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    input: {
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 3
    }
});

export default Task30_31