import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from "react-native";

const SearchTextInput = ({ onChange,onSubmitted }) => {
    return <View style={style.backgroundStyle}>
        <Feather name="search" style={style.iconStyle} />
        <TextInput s
            tyle={style.inputStyle}
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={onChange}
            onEndEditing={onSubmitted}
        />
    </View>
}

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#dfddddff',
        height: 50,
        flexDirection: 'row',
        margin: 20,
        borderRadius: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchTextInput;