import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,TouchableHighlight, Alert, AlertIOS, AppRegistry, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'


class Agendar extends Component{
	constructor(){
		super()
		this.state ={
			titulo:'',
			tel:'',
			date:''
		}
	}

	changeTitle(titulo){
		this.setState({titulo})
	}
	changeTel(tel){
		this.setState({tel})
	}
	buttonPressed(){
		if(this.state.titulo && this.state.tel && this.state.date){
			AlertIOS.alert("Hemos agendado su cita")
		} else{
			AlertIOS.alert("¡Por favor llene todos los campos!")
		}
	}
	render(){
		return(
		<View style={styles.contenedor} >
			<View style={styles.cabecera}>
			<Text onPress={()=>this.props.navigation.navigate('Menu')} style={styles.textHeader}>Inicio</Text>
			<Icon onPress={()=>this.props.navigation.navigate('Perfil')} style={styles.icono}
				name="user"
				color="#9e9e9e"
				size={30}
				
			/>

			</View>

			<View>
			<Text style={styles.titulo}>Pedir cita</Text>
			<TextInput
				style={styles.input}
				placeholder="Nombre y Apellido"
				value={this.state.titulo}
				onChangeText={(titulo) => this.changeTitle(titulo)}
			/>

			<TextInput
				style={styles.input}
				placeholder="Número Tel."
				value={this.state.tel}
				onChangeText={(tel) => this.changeTel(tel)}
			/>

			 <DatePicker
        		style={styles.fecha}
        		date={this.state.date}
        		mode="datetime"
		        placeholder="Fecha y Hora"
		        format="YYYY-MM-DD HH:mm"
		        minDate="2019-05-21"
		        maxDate="2016-06-01"
		        confirmBtnText="Confirm"
		        cancelBtnText="Cancel"
		        customStyles={{
		          dateIcon: {
		            position: 'absolute',
		            left: 0,
		            top: 4,
		            marginLeft: 0
		          },
		          dateInput: {
		            marginLeft: 36
		          }
		          // ... You can check the source to find the other keys.
		        }}
		        onDateChange={(date) => {this.setState({date: date})}}
		      />

			<TouchableHighlight
				style={styles.boton}
				onPress={()=>this.buttonPressed()}>
			<Text style={styles.textBoton}>Guardar</Text>
			</TouchableHighlight>

			</View>

		</View>


		);
	}
}

const styles = StyleSheet.create({
	fecha:{
		width:200,
		borderColor:'#bdbdbd',
		marginTop:10
	},

	titulo:{
		textAlign:'center',
		fontSize:25,
		color:'black',
		marginBottom:40,
	},

	input:{
		height:40,
		borderColor:'#bdbdbd',
		borderWidth:1,
		marginBottom:20
	},

	boton:{
		width: 200,
		height: 53,
		backgroundColor: '#66ff91',
		alignItems: 'center',
		justifyContent: 'center',
		
		marginBottom: 30,
		marginTop: 10,
		borderRadius: 8,
		borderWidth: 1
	},

	textBoton:{
		color: '#000000',
		fontSize: 18

	},

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
export default Agendar;