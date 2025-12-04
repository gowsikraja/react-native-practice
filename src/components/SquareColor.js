import { Button, StyleSheet, Text, View } from 'react-native';

const SquareColor = ({ color, onIncrease, onDecrease }) => {
    return <View>
        <Text style={style.textStyle}>{color}</Text>
        <Button title={`Increase ${color} Color`} onPress={onIncrease} />
        <Button title={`Decreas ${color} Color`} onPress={onDecrease} />
    </View>
}


const style = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default SquareColor;