import React from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";


function AppearanceContextConsumer() {
    const {theme, toggleTheme} = React.useContext(AppearanceContext);
    return (
        <View style={[styles.container, {
            backgroundColor: theme === 'dark' ? '#313131': '#ababab',
        }]}>
            <Pressable style={[
                styles.button,
                {backgroundColor: theme === 'light' ? '#434343' : '#eaeaea'},
            ]} onPress={toggleTheme}>
                <Text
                    style={[
                        styles.buttonLabel,
                        {
                        color: theme === 'light' ? '#eaeaea' : '#434343',
                        },
                    ]}>
                    Toggle theme
                </Text>
            </Pressable>
        </View>
    )
}

export default function UseContextExample() {
    return <AppearanceContextConsumer/>;
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 55,
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonLabel: {
        
    }
}