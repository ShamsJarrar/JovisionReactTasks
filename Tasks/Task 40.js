import React, { useState } from "react";
import { View, StyleSheet, Button } from 'react-native';
import { Provider } from "react-redux";
import store from "../store";
import Component1 from "../Components/Component1_task40";


function Task40(){
    const [visible, toggleVisibility] = useState(true);

    const changeVisibility = () => {
        toggleVisibility((visible) => !visible);
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>

                {visible ? <Component1 /> : null}

                <Button
                title="Hide Component"
                color="#ab0043"
                onPress={changeVisibility} />

            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Task40;