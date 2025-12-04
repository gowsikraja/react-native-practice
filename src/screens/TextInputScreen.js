import { useState } from "react";
import { StyleSheet, TextInput, View ,Text} from "react-native";

const TextInputScreen = () => {

    const [name, setName] = useState('')

    return <View>
        <TextInput
            style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            // value="Gowsik"
            onChangeText={(value) => setName(value)}
        />
        <Text>My Name is : {name}</Text>
    </View>
}


const style = StyleSheet.create({

    input: {
        margin: 30,
        outlineColor: 'black',
        outlineWidth: 2
    }

});

export default TextInputScreen;