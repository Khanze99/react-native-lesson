import React from "react";
import { Text, View, StyleSheet, Button } from "react-native"
import {Modalize} from "react-native-modalize"



let MenuItems = [
    {
        title: 'Беляш', weight: '300g', 
        cookingTimeMin: 1, cookingTimeMax: 5, 
        description: 'Тесто, говядина',
        price: 100, currency: 'RUB'
    },
    {
        title: 'Яичница', weight: '300g', 
        cookingTimeMin: 1, cookingTimeMax: 10, 
        description: 'Яйца, масла',
        price: 150, currency: 'RUB'
    },
    {
        title: 'Пицца', weight: '500g', 
        cookingTimeMin: 20, cookingTimeMax: 30, 
        description: 'Тесто, овощи, колбаски и 4 сыра',
        price: 500, currency: 'RUB'
    },
]



export const BasketList = ({ navigation, route }) => {
    let [MenuItemState, setMenu] = React.useState(MenuItems);
    const sum = MenuItemState.reduce((accumulator, currentItem) => 
        accumulator + currentItem.price, 0
    );

    const [state, setState] = React.useState(true);
    const [stateItems, setStateItems] = React.useState([]);
    const modal = React.useRef(null);
    const onOpen = () => {
        setStateItems(MenuItems)
        setMenu([]);
        modal.current.open();
    };


    return (
    <View>
        <View style={styles.container}>
            {MenuItemState.map((item, index) => (
            <View key={index} style={styles.menuItem}>
                <Text>{item.title}</Text>
                <Text>Weight: {item.weight}</Text>
                <Text>Price: {item.price} {item.currency}</Text>
                <Button title="+"></Button>
                <Button title="-"></Button>
            </View>            
            ))}
        <Text>Сумма заказа: {sum}</Text>
        <Button title='Заказать' onPress={onOpen}/>
        <Modalize ref={modal}
         modalStyle={{justifyContent: 'center', alignItems: 'center' }}
         modalHeight={70}>
                    <View >{stateItems.map((dish, _) => (<Text>{dish.title}</Text>))}</View>
        </Modalize>        
        </View>
            {state && <Button
                title='Очистить корзину'
                onPress={() => {
                setState(false); MenuItemsUse = [];
                }}/>}
            <Button
            title='Вернуться на главный экран'
            onPress={() => {
            navigation.pop()
            }}
        />
    </View>)
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10,
        alignItems: 'center'
    },
    menuItem: {
        width: '45%', // Задаем ширину элемента в зависимости от количества колонок
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
});
