import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style = {styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style = {styles.imageContainer}>
                <Image style = {styles.image}  source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed  
                <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess the number 
                <Text style={styles.highlight}> {userNumber}</Text>.
            </Text>
            <PrimaryButton pressed = {onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen; 

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1 ,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#3b021f',
        overflow: 'hidden',
        margin: 35
    },

    image: {
        width: '100%',
        height: '100%'
    },

    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: '#720C3C'
    }
    
});