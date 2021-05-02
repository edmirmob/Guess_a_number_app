import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    return (
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
                    maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Reset' onPress={() => { }} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title='Confirm' onPress={() => { }} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
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