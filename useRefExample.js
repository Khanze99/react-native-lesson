import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function UseRefExample() {
const inputRef = React.useRef<TextInput>(null)


    return (
        <View style={StyleSheet.container}>
            <Text style={styles.label}>Fun joke:</Text>
            <Text style={styles.joke}>{joke}</Text>
        </View>
    )
}

const styles = {
    container: {
        width: '100%'
    },
    input: {
        height: 45,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        color: 'black'
    },
    label: {
        fontSize: 24,
        color: 'black'
    }
}