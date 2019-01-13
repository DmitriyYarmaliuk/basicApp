import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native'

// Functional component
const listItem = (props) => (
    // The TouchableWithoutFeedBack component can have only one child element
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
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
