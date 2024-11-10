import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children, pressed }) {
    return (
        <View style= {styles.buttonOuterConatiner} >
           <Pressable 
               style = {styles.buttonInnerConstainer} 
               onPress={pressed} 
               android_ripple={{color: '#640233'}}
            >
              <Text style = {styles.buttonText}>{children}</Text>
           </Pressable>
        </View>
    );
}
export default PrimaryButton; 

const styles = StyleSheet.create({
    buttonOuterConatiner: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },

    buttonInnerConstainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    }

})