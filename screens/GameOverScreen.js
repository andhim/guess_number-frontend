import axios from 'axios';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const GameOverScreen = props => {

    const putDataIntoBackend = async() => {
        const response = await axios("http://localhost:8080/postNumbers", {
            userNum: props.userNum,
            roundNum: props.roundNum
        });
        console.log(response.data);
    };

    return (
        <View style={styles.screen}>
            <Text>The Game is over</Text>
            <Text>Number of rounds: {props.roundNum}</Text>
            <Text>Number was: {props.userNum}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;