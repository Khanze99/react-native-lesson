import axios from "axios";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

async function fetchJoke () {
    return axios(
        {url: 'https://official-joke-api.appspot.com/random_joke'}
    )
}

function formatJoke ({setup, punchline}: {setup: String, punchline: String}) {
    return `${setup} ${punchline}`;
}

export default function useEffectExample() {
    const [joke, setJoke] = React.useState('')
    React.useEffect(
        () => {
            fetchJoke().then(res => {setJoke(formatJoke(res.data));}).catch(() => {setJoke('Failed to fetch a joke');})
        }, []
    )   


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