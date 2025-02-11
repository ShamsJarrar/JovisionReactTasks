import React, { useState, useCallback } from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import randomWordGen from '../Components/randomWordGenerator';

function Task36_37() {
    const words = Array.from({ length: 100 }, () => randomWordGen(10));
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }, []);

    return (
        <ScrollView
        style={styles.container}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

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
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageText: {
        color: "#000000",
        fontSize: 20,
        margin: 10,
    }
});

export default Task36_37;