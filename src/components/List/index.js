import React from 'react'
import { View, StyleSheet } from 'react-native'
import ListItem from '../ListItem'

const list = ({ values }) => {
    const valuesToShow = values.map((value, index) => (
        <ListItem key={index} text={value} />
    ))
    return (
        <View style={styles.listContainer}>{valuesToShow}</View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default list