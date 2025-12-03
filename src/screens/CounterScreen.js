import { useState } from "react";
import { Button, Text, View } from "react-native";

const CounterScreen = () => {

    const [counter, setConter] = useState(0)

    return <View>
        <Button title="Incress" onPress={() => {
            setConter(counter + 1)

        }} />
        <Button title="Decress" onPress={() => {
            setConter(counter - 1)
        }} />
        <Text>Counter Value : {counter}</Text>
    </View>
}

export default CounterScreen;