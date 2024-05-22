import react from "react";
import { View, Button } from "react-native";
import Main from "./Main";
import ImageCustom from "./ImageCustom";
import TextInputCustom from "./TextInput";

export const SecondScreen = ({ navigation, route }) => (
    <View>
        <Main>
            <ImageCustom/>
            <TextInputCustom></TextInputCustom>
            <Button
            title='Вернуться на главный экран'
            onPress={() => {
            navigation.pop()
            }}
        />
        </Main>
    </View>
  )