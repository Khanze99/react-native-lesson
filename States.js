import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function useStateExample() {
const [input, setInput] = React.useState('')

    return (
        <View style={StyleSheet.container}>
            <TextInput 
            style={styles.input} 
            cursorColor={'black'} 
            onChangeText={(v) => {setInput(v);}}/>
            <Text style={styles.label}>{input.length}</Text>
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