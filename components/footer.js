/*
* File: footer.js
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-04-05
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { StyleSheet, Text, View } from "react-native";


export default function Footer(){
    return(
        <View style={styles.container}>
            <Text>Névjegy:</Text>
            <Text>Sánta Renáta Diána, Szoft II N, 2023-04-05</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:'lightblue',
        alignItems:"center",
        justifyContent:"center"
    }
});