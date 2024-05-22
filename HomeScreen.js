import { useNavigation } from '@react-navigation/native';
import { View, Button, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import Main from './Main';
import ImageCustom from './ImageCustom';
import TextInputCustom from './TextInput';

export const HomeScreen = () => {
    const navigation = useNavigation();
  
    const goToSecondScreen = () => {
        navigation.navigate('SecondScreen');
    };

    const goToMenu = () => {
        navigation.navigate('MenuList');
    };

    const goToBasket = () => {
        navigation.navigate('BasketList');
    };

    const goToStates = () => {
        navigation.navigate('StateExample');
    };

    const goToEffect = () => {
        navigation.navigate('EffectExample');
    };

    const goToScroll = () => {
      navigation.navigate('ScrollExample');
  };


  
    return (
        <View>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Pressable style={{margin: 10, height: 64, width: 128, backgroundColor: 'blue'}}
            onPress={(e) => {goToMenu()}}></Pressable>
            <TouchableOpacity style={{margin:10, height: 64, width: 128, backgroundColor: 'red'}}
            onPress={(e) => {goToSecondScreen()}}></TouchableOpacity>
            <TouchableOpacity style={{margin:10, height: 64, width: 128, backgroundColor: 'pink'}}
            onPress={(e) => {goToBasket()}}></TouchableOpacity>
            <TouchableOpacity style={{margin:10, height: 64, width: 128, backgroundColor: 'green'}}
            onPress={(e) => {goToStates()}}></TouchableOpacity>
            <TouchableOpacity style={{margin:10, height: 64, width: 128, backgroundColor: 'purple'}}
            onPress={(e) => {goToEffect()}}></TouchableOpacity>
            <TouchableOpacity style={{margin:10, height: 64, width: 128, backgroundColor: 'grey'}}
            onPress={(e) => {goToScroll()}}></TouchableOpacity>

        </View>
    </View>   
    );
  };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16
    },
    column: {
      flex: 1,
      height: 100,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 8,
      marginTop: 60
    },
    header: {
      backgroundColor: '#faf',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customized: {
      color: '#faf',
    },
  
  });
  