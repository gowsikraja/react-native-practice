import { useReducer } from "react";
import { Button, Text, View } from "react-native";

const CounterScreen = () => {

    const reducer = (state, action) => {

        switch (action.type) {
            case ('incress'):
                return state + 1;
            case ('decress'):
                return state - 1;
            default:
                return state;
        }
    }


    const [state, dispach] = useReducer(reducer, 0)



    return <View>
        <Button title="Incress" onPress={() => {
            dispach({ type: 'incress' })

        }} />
        <Button title="Decress" onPress={() => {
            dispach({ type: 'decress' })
        }} />
        <Text>Counter Value : {state}</Text>
    </View>
}

export default CounterScreen;