import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Perfil extends Component{
	render(){
		return(
		<View style={styles.contenedor} >

			<View style={styles.cabecera}>
			<Text onPress={()=>this.props.navigation.navigate('Menu')} style={styles.textHeader}>Inicio</Text>
			<Icon style={styles.icono}

				name="user"
				color="#9e9e9e"
				size={30}
				
			/>

			</View>

		</View>

		);
	}
}

const styles = StyleSheet.create({

	icono:{
		left:330,
		top:-10
	},

	cabecera:{
		marginBottom:130,
		top: 0,
		left: 0,
		backgroundColor:'#eff0f4',
		height: 70,
		width: '100%'
	},

	textHeader:{
		color: '#9e9e9e',
		fontSize: 30,
		top:20,
		left:20
	},

	contenedor:{
		
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white'
	}
})

export default Perfil;