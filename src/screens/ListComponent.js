import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListComponent = () => {
    const items = [
        { name: 'Frind #1' },
        { name: 'Frind #2' },
        { name: 'Frind #3' },
        { name: 'Frind #4' },
        { name: 'Frind #5' },
        { name: 'Frind #6' },
        { name: 'Frind #7' },
        { name: 'Frind #8' },
    ];
    return (
        <FlatList
            data={items}
            renderItem={(element) => {
                return <Text>{element.item.name}</Text>;
            }}
        />
    );
};


export default ListComponent;