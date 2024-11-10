
import { useState, useEffect } from "react";
import {Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, ViewBase, Alert, FlatList } from "react-native";  
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessLogItem from "../components/Game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);  
    
    function nextGuessHandler(direction) { 
        // direction => 'lower' or 'higher'
        
        if(
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!!", 'This is not right...Dont Confuse Me :-(', [{text: 'Sorry!', style: 'cancel'},

            ]);
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [ newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer> 
          <Card>
            <InstructionText style={styles.instructingText}>
                Higher or Lower?
            </InstructionText>
            <View style = {styles.buttonsContainer}>
                <View style = {styles.buttonContainer1}>
                    <PrimaryButton pressed={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={20} color= "white" />
                    </PrimaryButton>
                </View>
                <View style = {styles.buttonContainer1}>
                    <PrimaryButton pressed={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="add" size={20} color= "white" />
                    </PrimaryButton>
                </View>
            </View>
          </Card> 
            <View style= {styles.listContainer}>
              {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */} 
               <FlatList 
                   data= {guessRounds}
                   renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                   keyExtractor={(item) => item}               
               />
            </View>   
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 44
    },
    instructingText: {
        marginBottom: 15
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer1: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 15
    }
});