import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ListItem from '../ListItem'

const list = ({ values, onItemDeleted }) => {
    const valuesToShow = values.map((value, index) => (
        <ListItem
            key={index}
            text={value}
            onItemPressed={() => onItemDeleted(index)} />
    ))
    return (

        <ScrollView style={styles.listContainer}>{valuesToShow}</ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default list