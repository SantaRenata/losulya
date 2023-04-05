/*
* File: header.js
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-04-05
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Feladat 0375</Text>
            <Text style={styles.text}>Ló súly becslő</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    width:"100%",
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
        fontFamily:"Arial",
        fontSize:"18px",
    }
});