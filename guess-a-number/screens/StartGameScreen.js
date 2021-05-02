import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputhandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
    }
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Text>Chosen Number {selectedNumber}</Text>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select a Number</Text>
                    <Input
                        styles={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        textAlign="center"
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' onPress={resetInputhandler} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
        marginTop: 10
    },
    input: {
        width: 50,
        textAlign: "center",
    },
    button: {
        flex: 1,
        padding: 5
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen;