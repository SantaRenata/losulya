/*
* File: App.js
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-04-05
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
