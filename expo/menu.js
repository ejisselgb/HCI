import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component{
	render(){
		
		return(
		<View style={styles.contenedor} >

			<View style={styles.cabecera}>
			<Text style={styles.textHeader}>Inicio</Text>
			<Icon onPress={()=>this.props.navigation.navigate('Perfil')} style={styles.icono}

				name="user"
				color="#9e9e9e"
				size={30}
				
			/>

			</View>

			<TouchableHighlight onPress={()=>this.props.navigation.navigate('Agendar')} style={styles.boton}>
			<Text style={styles.textBoton}>Pedir cita</Text>
			</TouchableHighlight>

			<TouchableHighlight style={styles.boton}>
			<Text style={styles.textBoton}>Pedir medicamentos</Text>
			</TouchableHighlight>
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
	},

	boton:{
		width: 200,
		height: 95,
		backgroundColor: '#66ff91',
		alignItems: 'center',
		justifyContent: 'center',
		
		marginBottom: 30,
		
		borderRadius: 8,
		borderWidth: 1
	},

	textBoton:{
		color: '#000000',
		fontSize: 24

	}
})

export default Menu;