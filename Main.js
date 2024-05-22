import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Main({children}: React.PropsWithChildren<{}>) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Main Page</Text>
            </View>
            <View>{children}</View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingTop: 60
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  