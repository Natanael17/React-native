import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
	render(){
		return (
			<View style={style.container}>
			<Image style={{width:70, height:50}}
			source={require('./foto.jpg')}/>
			<TextInput style={style.inputBox}
			placeholder="Email atau Username"/>
			<TextInput style={style.inputBox}
			placeholder="Password"
			secureTextEntry={true}//sandi ga kelihatan
			/>
			<TouchableOpacity style={style.button}>
				<Text style={style.buttonText}>MASUK</Text>
			</TouchableOpacity>

			<TouchableOpacity>
			<Text>Lupa Kata Sandi?</Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const styles = StyleSheet.create ({
	container: {
		flex:1,
		backgroundColor:'#ffffff',
		justifyContent:'center'
	},
	inputBox: {
		width:250,
		fontSize: 13,
		color:'#000000'
	},
	button: {
		width:250,
		height: 40,
		alignItems: 'center',
		justifyContent:'center'
		backgroundColor: '#3B5998',
		marginVertical: 10,
		paddingHorizontal: 80
	},
	buttonText: {
		fontSize: 13,
		color:'#f7f7f7'
	}
});