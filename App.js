/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import A from './Components/A';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <A/>
      <Image style={{width: 300, height: 300}}
        source={require('./foto.jpg')} />
        <Text> </Text>
        <Text style={styles.kiri}></Text>
        <Text style={styles.kiri}>Nama : Natanael Yehuda Chrysda Hermawan</Text>
        <Text style={styles.kiri}>No.Abs : 30</Text>
        <Text style={styles.kiri}>Kelas : XI RPL 2</Text>
        <Text> </Text>
        <Text style={styles.a}>Double tap R on your keyboard to reload</Text>
        <Text style={styles.a}>Shake or press menu button for dev menu</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffff',
    marginBottom: 5,
    fontFamily:'tahoma',
    fontSize:15,
  },
  kiri:{
    textAlign:'left',
    color:'#ffff',
    fontFamily:'tahoma',
    fontSize:15,
    marginBottom:2,
  },

});
