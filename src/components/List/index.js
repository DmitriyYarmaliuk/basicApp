import React from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import ListItem from '../ListItem'

const list = ({ values, onItemDeleted }) => {
    // const valuesToShow = values.map((value, index) => (
    //     <ListItem
    //         key={index}
    //         text={value}
    //         onItemPressed={() => onItemDeleted(index)} />
    // ))
    return (
        <FlatList
            style={styles.listContainer}
            data={values}
            renderItem={(info) => (
                <ListItem
                    text={info.item.value}
                    onItemPressed={() => onItemDeleted(info.item.key)}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default list