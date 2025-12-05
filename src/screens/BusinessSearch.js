import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import SearchTextInput from "../components/SearchTextInput";
// 34.030018, -118.223564
const BusinessSearch = () => {

    const [text, updateText] = useState('')
    const [result, setResult] = useState([])

    const callSearchApi = async () => {
        const response = await yelp.get('/search',
            {
                params: {
                    latitude: '34.030018',
                    longitude: '-118.223564'
                }
            }
        );
        setResult(response.data.businesses)
    }

    return <View>
        <SearchTextInput onChange={updateText} onSubmitted={() => {
            console.log(text);
            console.log('Text Submitted');
            callSearchApi();
        }} />
        <Text>Search Result : {result.length}</Text>

    </View>
}

const style = StyleSheet.create({})

export default BusinessSearch;