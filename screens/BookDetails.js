import React from 'react';
import { View, Button, Text, StyleSheet } from "react-native";

const BookDetails = () => {
    return (
        <View style={styles.center}>
            <Text>Always forgive your enemies, nothing annoys</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default BookDetails;
