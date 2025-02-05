import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Alert, Image, Pressable, Button, TextInput } from 'react-native';

function Task28_29() {
    const listRef = useRef(null);
    const [inputText, setInput] = useState("");

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

    const scrollList = () => {
        let ind = parseInt(inputText);
        if(isNaN(ind) || ind < 0 || ind > 9){
            Alert.alert("Error", "Invalid index entered! Only enter numbers between 0-9!");
        }
        else{
            listRef.current.scrollToIndex({index: ind, viewPosition: 0.5});
        }
    }

    return (
        <View style={styles.container}>

            <FlatList
            ref={listRef}
            data={data}
            horizontal
            keyExtractor={(item, index) => index}
            style={{flexGrow: 1}}
            renderItem={({item, index}) => (
                <Pressable onPress={() => showIndex(index)}>
                    <Image style={styles.image} source={item} />
                </Pressable>
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
    image: {
        width: 70,
        height: 40,
        borderWidth: 2,
        marginRight: 5,
    },
    input: {
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 3
    }
});

export default Task28_29