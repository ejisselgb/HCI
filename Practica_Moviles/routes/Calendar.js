import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, DatePickerAndroid, TouchableOpacity, Alert, Picker, Image} from 'react-native';

class Calendar extends Component {

	constructor(props) {
    	super(props);
    	this.state = { text: '', tel: '' };
  	}

	static navigationOptions = {
	    title: 'Agendar cita',
	    headerStyle: {
	    	backgroundColor: '#37b7ff',
	    },
	    headerTitleStyle:{
	    	color: '#ffffff'
	    },
	    headerTintColor: '#ffffff'
	};

	openDatePicker() {
	    try {
	      DatePickerAndroid.open({
	        date: new Date()
	      }).then(date => {
	        if (date.action !== DatePickerAndroid.dismissedAction) {
	          const finalDate = `${date.month + 1} ${date.day} ${date.year}`;
	        }
	      });
	    } catch ({ code, message }) {
	      console.warn('No se pudo abrir el calendario', message);
	    }
  	}

  	selectAppointment(){

  		Alert.alert(
		  'Su cita ha sido agendada',
		  'Revise los datos',
		  [
		    {
		      text: 'Cancelar',
		      onPress: () => console.log('Cancel Pressed'),
		      style: 'cancel',
		    },
		    {text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  {cancelable: false},
		);
  		console.log("Registrar mi cita");
  	}

	render() {
    	return (
    		<View style={styles.container}>
    			<Text>Ingresa tu número de documento</Text>
    			<TextInput
			        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(text) => this.setState({text})}
			        placeholder='Ingresa tu nombre aquí'
			        value={this.state.text}
		    	/>
    			<Text>Ingresa tu nombre</Text>
	    		<TextInput
			        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(text) => this.setState({text})}
			        placeholder='Ingresa tu nombre aquí'
			        value={this.state.text}
			    />
		    	<Text>Ingresa tu teléfono</Text>
	    		<TextInput
			        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(tel) => this.setState({tel})}
			        placeholder='Ingresa tu teléfono'
			        value={this.state.tel}
			    />
			    <Text>Tipo de Consulta (Escoge una opción)</Text>
			    <Picker
			    	selectedValue={this.state.language}
			    	style={{height: 50, width: 250}}
			    	onValueChange = {(itemValue, intemIndex) => this.setState({
			    		language: itemValue
			    	})}>
			    	<Picker.Item label="Medicina General" value="Medicina General" />
			    	<Picker.Item label="Medicina Especializada" value="Medicina Especializada" />
			    </Picker>
			    <Text>Selecciona la fecha de tu cita</Text>
			    <Image style={styles.img} source={require('../images/calendar.png')}/>
			    <TouchableOpacity onPress={this.openDatePicker} style={styles.buttonPress}>
			    	<Text style={styles.textButton}>Escoger fecha</Text>
			    </TouchableOpacity>
		    <Button title="Agendar mi cita" onPress={this.selectAppointment} style={styles.buttonPress}/>
		    </View>
    	);
	}
}

const styles = StyleSheet.create({
 buttonPress: {
    alignItems: 'center',
    backgroundColor: '#6885FF',
    padding: 10,
    marginTop: 30
 },
 textButton: {
 	color: "#fff",
    fontSize: 18,
    fontWeight: "600"
 },
 container: {
 	marginTop: 20
 },
 img:{
 	marginLeft: '35%',
 	width: 110,
 	height: 110,
 	resizeMode: "stretch",
 }
})

export default Calendar;
