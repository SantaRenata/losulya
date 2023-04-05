import React from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

export default function Body(){
    const [perimeter, setPerimeter] = React.useState('');
    const [length, setLength] = React.useState('');
   
    const [weight, setWeight] = React.useState('');

    function onCalcButton(){
        let weight = (perimeter*perimeter*length)/11877;
        setWeight(weight);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Ló kerülete:</Text>
            <Text style={styles.hiddentext}>(közvetlenül a marmagasság mögött)</Text>
            <TextInput style={styles.input} onChangeText={(res) => {setPerimeter(res)}}/>
            
            <Text style={styles.text}>Ló hossza:</Text>
            <Text style={styles.hiddentext}>(vállától a hátsó negyedig)</Text>
            <TextInput style={styles.input} onChangeText={(res) => {setLength(res)}}/>
        
            
            <TouchableHighlight style={styles.button} onPress={onCalcButton}><Text>Számít</Text></TouchableHighlight>

            <Text style={styles.result}>Súlya:</Text>
            <TextInput style={styles.input} editable = {false} value={weight} onChangeText={(res) => {setWeight(res)}}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    width:"100%",
    backgroundColor: 'cadetblue',
    alignItems: 'center',
    justifyContent: 'center'
    },
    input:{
        backgroundColor:"white",
        borderRadius:"5px",
        width:"50%",
        height:"3%",
        marginBottom:"10px",
    },
    result:{
        marginTop:"30px",
        width:"50%",
        fontFamily:"Arial"
    },
    text:{
        width:"50%",
        fontFamily:"Arial"
    },
    hiddentext:{
        width:"50%",
        fontFamily:"Arial",
        color:"#5B5553"
    },
    button:{
        backgroundColor:"#FBECD7",
        marginTop:"6px",
        padding:"3px",
        width:"20%",
        borderRadius:"8px",
        alignItems:"center",
    }
});