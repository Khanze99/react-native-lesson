import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {SecondScreen} from './SecondScreen';
import {HomeScreen} from './HomeScreen'
import MenuList from './Menu';
import {BasketList} from './Basket'
import useStateExample from './States';
import useEffectExample from './UseEffectExample';
import ScrollViewExample from './ScrollExample';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='SecondScreen' component={SecondScreen}/>
        <Stack.Screen name='MenuList' component={MenuList}/>
        <Stack.Screen name='BasketList' component={BasketList}/>
        <Stack.Screen name='StateExample' component={useStateExample}/>
        <Stack.Screen name='EffectExample' component={useEffectExample}/>
        <Stack.Screen name='ScrollExample' component={ScrollViewExample}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}