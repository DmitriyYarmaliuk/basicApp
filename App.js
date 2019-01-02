import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            values: [],
        }
    }

    buttonClicked = () => {
        if (!this.state.text.trim()) {
            return
        }
        let updatedValues = this.state.values.concat(this.state.text)
        this.setState({ values: updatedValues, text: '' })
    }

    onTextChange = (val) => {
        this.setState({ text: val })
        this.state.text
    }

    render() {
        const valuesToShow = this.state.values.map((value, index) => (
            <ListItem key={index} text={value} />
        ))
        return (
            <View style={styles.container}>
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
                <View style={styles.listContainer}>{valuesToShow}</View>
            </View >
        );
    }
}

// Notes:
// setting display to block or inline block is not supported in react native
// display can only be set to flex or none
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#ffff",
        justifyContent: "flex-start", // adjustments for the main access
    },
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
    listContainer: {
        width: "100%"
    }
});
