import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const NumberContainer = props => {
    return (
        <View style={styles.numberStyle}>
            <Text style={styles.textStyle}>{props.number}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    numberStyle: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,

    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.primary
    }
});
export default NumberContainer;