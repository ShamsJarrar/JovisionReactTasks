import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Alert, TextInputComponent } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Task35() {
    const [currName, setName] = useState("");
    const [currAge, setAge] = useState("");
    const [currCountry, setCountry] = useState("");

    const storeInfo = async(newInfo) => {
        try {
            const serializedVal = JSON.stringify(newInfo);
            await AsyncStorage.setItem('TextInputInfo', serializedVal);
        }
        catch(e) {
            Alert.alert("Error", "Invalid Input, unable to serialized input!")
        }
    };

    const getData = async() => {
        try {
            const storedData = await AsyncStorage.getItem('TextInputInfo');
            return storedData ? JSON.parse(storedData) : null;
        }
        catch(e) {
            Alert.alert("Error", "Unable to access stored data");
            return null;
        }
    };

    const saveObject = async () => {
        const updatedInfo = {
            "name": currName,
            "age": currAge,
            "country": currCountry,
            "timestamp": new Date().toString(),
        };

        await storeInfo(updatedInfo);
    };

    useEffect(() => {
        
        const checkStoredData = async () => {
            const storedData = await getData();
            if(storedData != null){
                const now = new Date();
                const savedTime = new Date(storedData.timestamp);
                if((now.getTime() - savedTime.getTime()) / (1000 * 60) < 1){
                    setName(storedData.name);
                    setAge(storedData.age);
                    setCountry(storedData.country);
                }
            }

        };

        checkStoredData();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.TextInputContainer}>

                <Text style={styles.text}>Name</Text>
                <TextInput
                editable
                value = {currName}
                style={styles.textInput}
                onChangeText={setName} />

            </View>

            <View style={styles.TextInputContainer}>
                
                <Text style={styles.text}>Age</Text>
                <TextInput
                editable
                value={currAge}
                style={styles.textInput}
                onChangeText={setAge} />
                
            </View>

            <View style={styles.TextInputContainer}>

                <Text style={styles.text}>Country</Text>
                <TextInput
                editable
                value={currCountry}
                style={styles.textInput}
                onChangeText={setCountry} />
                
            </View>

            <Button
            title="confirm"
            color="#ab0043"
            onPress={saveObject} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    TextInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: "#000000",
        margin: 5,
    },
    textInput: {
        borderWidth: 2,
        margin: 10,
        width: 300,
    }
});

export default Task35;