import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    onTextChange = (val) => {
        this.setState({ text: val })
        this.state.text
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ backgroundColor: "#ffff" }}
                    onChangeText={this.onTextChange}
                    value={this.state.text}
                    placeholder="Enter Text"
                    style={styles.placeInput}
                />
                <Button
                    onPress={this.buttonClicked}
                    title="Add"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    style={styles.placeButton}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
});

export default Input;