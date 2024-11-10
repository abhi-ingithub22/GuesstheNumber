
import { Text, StyleSheet } from "react-native";

function InstructionText({children, cStyle}) {
    return (
    <Text style = {[style.instructionText, cStyle]}>
        {children}
    </Text>
    );   
}

export default InstructionText;

const style = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: '#ddb52f',
        fontSize: 22,
    },
});