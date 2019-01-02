import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Functional component
const listItem = (props) => (
    <View style={styles.listItem} >
        <Text>{props.text}</Text>
    </View>
)

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginTop: 20,
        backgroundColor: "#eee"
    }
})
export default listItem