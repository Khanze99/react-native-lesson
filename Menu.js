import React, {useRef} from "react";
import react from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import {Modalize} from 'react-native-modalize';


type MenuItem = {
    title: string, // название блюда
    weight: string, // масса блюда - встретится на модалке описания блюда
    cookingTimeMin: number, // минимальное время приготовления блюда - также будет на модалке описания блюда
    cookingTimeMax: number, // максимальное время приготовления блюда - также будет на модалке описания блюда
    description: string, // тестовое описание блюда на той же модалке
    price: number, // цена за единицу блюда
    currency: 'RUB' | 'USD' // валюта, в которой указана стоимость блюда
  };

let MenuItems: [MenuItem] = [
    {
        title: 'Плов', weight: '400g', 
        cookingTimeMin: 20, cookingTimeMax: 60, 
        description: 'Рис, кунжутное масло, говядина, морковь, зира специи и тд',
        price: 300, currency: 'RUB',
},
    {
        title: 'Борщ', weight: '300g', 
        cookingTimeMin: 20, cookingTimeMax: 30, 
        description: 'Свекла, другие овощи, говядина специи и тд',
        price: 300, currency: 'RUB'
},
    {
        title: 'Шаурма', weight: '300g', 
        cookingTimeMin: 5, cookingTimeMax: 10, 
        description: 'курица, салат, огурцы, морковь, помидор, сыр, соус',
        price: 300, currency: 'RUB'
    },
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


export default function MenuList({ navigation, route }) {
    const [dish, setVisibleStates] = react.useState(MenuItems.map(() => ({
        count: 0
    })))

    const AddDish = (index) => {
        setVisibleStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = {
                count: 1,
            }
            return newStates;
        })

    }
    const Decrement = (index) => {
        setVisibleStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].count -= 1;
            return newStates;
        })
    }

    const Increment = (index) => {
        setVisibleStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].count += 1;
            return newStates;
        })
    }

    const modal = useRef(null);
    const [stateItem, setItemState] = react.useState(null);
    const onOpen = (item) => {
        setItemState(item);
        modal.current.open();
    };
    return (
    <View>
        <View style={styles.container}>
            {MenuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
                <Text>{item.title}</Text>
                <Text>Weight: {item.weight}</Text>
                <Text>Price: {item.price} {item.currency}</Text>
                <TouchableOpacity onPress={() => onOpen(item)}>
                    <Text>Состав</Text>
                </TouchableOpacity>
                {
                dish[index].count == 0 ? <Button title="Добавить" onPress={() => AddDish(index)}/>:
                <View>
                    <Button title="+" onPress={() => Increment(index)}/>
                    <Button title="-" onPress={() => Decrement(index)}/>
                </View>
                }
                {dish[index].count > 0 ? <Text>{dish[index].count}</Text>: null}
            </View>
            ))}
        </View>
        <Modalize ref={modal}
         modalStyle={{justifyContent: 'center', alignItems: 'center' }}
         modalHeight={70}>
                    {stateItem && <Text >{stateItem.description}</Text>}
        </Modalize>        
        <Button
        title='Вернуться на главный экран'
        onPress={() => {
        navigation.pop()
        }}
        />
    </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10,
    },
    containerModal: {
        flexDirection: 'column',
    },
    menuItem: {
        width: '45%', // Задаем ширину элемента в зависимости от количества колонок
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5,
    },
    flatList: {
        width: '100%'
    },
    contentContainer: {
        padding: 10
    },
    todoItemContainer: {
        height: 85,
        padding: 10,
        justifyContent: 'space-around',
        marginVertical: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'black'
    },
    scrollViewContent: {

    }
});
