import { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import SquareColor from '../components/SquareColor';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {

    const reducer = (state, action) => {
        console.log(state)
        console.log(action)
        switch (action.color) {
            case ('red'):
                return state.red + action.amount > 255 || state.red + action.amount < 0 ?
                    state : { ...state, red: state.red + action.amount };
            case ('green'):
                return state.green + action.amount > 255 || state.green + action.amount < 0 ?
                    state : { ...state, green: state.green + action.amount };
            case ('blue'):
                return state.blue + action.amount > 255 || state.blue + action.amount < 0 ?
                    state : { ...state, blue: state.blue + action.amount };
            default:
                return state;

        }
    }

    const [state, dispach] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

    const { red, green, blue } = state

    return <View>
        <SquareColor color={`Red : ${red}`}
            onIncrease={() =>
                dispach({ color: 'red', amount: COLOR_INCREMENT })
            }
            onDecrease={() =>
                dispach({ color: 'red', amount: -1 * COLOR_INCREMENT })
            } />
        <SquareColor color={`Green : ${green}`} onIncrease={() => {
            dispach(
                {
                    color: 'green',
                    amount: COLOR_INCREMENT
                })
        }} onDecrease={() => {
            dispach(
                {
                    color: 'green',
                    amount: -1 * COLOR_INCREMENT
                })
        }} />
        <SquareColor color={`Blue : ${blue}`} onIncrease={() => {
            dispach(
                {
                    color: 'blue',
                    amount: COLOR_INCREMENT
                })
        }} onDecrease={() => {
            dispach(
                {
                    color: 'blue',
                    amount: -1 * COLOR_INCREMENT
                })
        }} />

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
};


const style = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
})
export default SquareScreen;