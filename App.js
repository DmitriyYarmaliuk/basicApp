import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './src/components/Input'
import List from './src/components/List'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [],
        }
    }
    onValueAddedHandler = (text) => {
        let updatedValues = this.state.values.concat(text)
        this.setState({ values: updatedValues })
    }
    deleteItem = (index) => {
        // let newValues = this.state.values
        // newValues.splice(index, 1)
        // alert(newValues)
        // this.setState({ values: newValues })
        // This ensures that the call is made when the update is actually made since setState is
        // technically asynchronous
        this.setState((prevState) => {
            return {
                values: prevState.values.filter((place, i) => {
                    return i !== index
                })
            }
        })
    }
    render() {

        return (
            <View style={styles.container}>
                <Input onValueAdded={this.onValueAddedHandler} />
                <List values={this.state.values} onItemDeleted={this.deleteItem} />
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
});
