import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

class Task18 extends Component{
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 5000);
    }

    render() {
        let display;
        if(this.state.loading) {
            display = (
                <>
                    <Text style = {styles.Text}>Loading...</Text>
                    <ActivityIndicator size="large" color="#6df0e0" />
                </>
            );
        }
        else {
            display = <Text style = {styles.Text}>Shams</Text>;
        }


        return (
            <View style={styles.container}>
                {display}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Text:{
        textAlign: "center",
        fontSize: 20,
        color: "#000000",
    },
});

export default Task18