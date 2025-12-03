import React from 'react';
import { Text, FlatList,View } from 'react-native'
import ImageDetails from '../components/ImageDetails';

const ImageList = () => {
    return <View>
        <ImageDetails title="beach" source={require("../../assets/beach.jpg")} />
        <ImageDetails title='forest' source={require("../../assets/forest.jpg")} />
        <ImageDetails title='mountain' source={require("../../assets/mountain.jpg")} />
    </View>
}

export default ImageList;