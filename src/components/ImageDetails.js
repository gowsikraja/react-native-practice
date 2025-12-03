import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageDetails = (probs) => {
    return <View>
        <Text style={style.textStyle}>{probs.title}</Text>
        <Image source={probs.source} />
    </View>
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});
export default ImageDetails;