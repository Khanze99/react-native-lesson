import { View, StyleSheet, Text, TextInput } from "react-native";


interface ITextInput {
    onChange: {text: string};
  };
  
export default function TextInputCustom (props: ITextInput) {
    return (
        <View style={StyleSheet.container}>
            <Text style={{color: 'black'}}>Введите текст</Text>
            <TextInput style={styles.input} onChange={props.onChange}></TextInput>
        </View>
    )
  };
  
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
      height: 45,
      width: '90%',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'black',
    },
  
  });
