import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";

const ButtonComponent = (props) => {
    return <View>
        <Button
            title="Press Me"
            onPress={() => props.navigation.navigate('Home')}
        />
        <TouchableOpacity onPress={() => console.log('TouchableOpacity Pressed')}>
            <Text>Touchable Opacity</Text>
        </TouchableOpacity>
        <Button
            title="Go to Image List"
            onPress={() => props.navigation.navigate('ImageList')}
        />

        <Button
            title="Go to Counter screen"
            onPress={() => props.navigation.navigate('Counter')}
        />
    </View>
};



export default ButtonComponent;