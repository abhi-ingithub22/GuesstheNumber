
import { View, StyleSheet } from "react-native";

function Card({children}) {
    return <View style = {styles.card}>{children}</View>;

}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35, 
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 6 
    }

});