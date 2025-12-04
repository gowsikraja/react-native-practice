import { Button, Text, TouchableOpacity, View } from "react-native";

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
        <Button
            title="Go to Color screen"
            onPress={() => props.navigation.navigate('ColorScreen')}
        />
        <Button
            title="Go to Square screen"
            onPress={() => props.navigation.navigate('Square')}
        />
        <Button
            title="Go to TextInput screen"
            onPress={() => props.navigation.navigate('TextInput')}
        />
    </View>
};



export default ButtonComponent;