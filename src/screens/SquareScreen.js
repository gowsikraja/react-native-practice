import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SquareColor from '../components/SquareColor';

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [greeen, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (value) => {
        console.log(value)

        if (value <= 0) {
            return 0;
        } else if (value >= 256) {
            return 256
        }
        return value;
    }

    return <View>
        <SquareColor color='Red' onIncrease={() => {
            setRed(setColor(red + 10))
        }} onDecrease={() => {
            setRed(setColor(red - 10))
        }} />
        <SquareColor color='Green' onIncrease={() => {
            setGreen(setColor(greeen + 10))
        }} onDecrease={() => {
            setGreen(setColor(greeen - 10))
        }} />
        <SquareColor color='Blue' onIncrease={() => {
            setBlue(setColor(blue + 10))
        }} onDecrease={() => {
            setBlue(setColor(blue - 10))
        }} />

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${greeen},${blue})` }} />
    </View>
};


const style = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
})
export default SquareScreen;