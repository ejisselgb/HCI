import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';


class Home extends Component {

	static navigationOptions = {
	    title: 'Inicio',
	    headerStyle: {
	    	backgroundColor: '#1c5b80',
	    },
	    headerTitleStyle:{
	    	color: '#ffffff'
	    }
	};

	goToCalendar () {
	  console.log("Ajustar esta interfaz");
	}

  render() {
  	const {navigate} = this.props.navigation;
    return (
    	<View>
    		<TouchableOpacity onPress={() => navigate('Calendar', {name: 'calendar'})} style={styles.buttonPress1}>
		    	<Text style={styles.textButton}>Agendar Cita</Text>
		    	<Image style={styles.img} source={require('../images/btn1.jpg')}/>
		    </TouchableOpacity>

		    <TouchableOpacity onPress={() => navigate('Calendar', {name: 'calendar'})} style={styles.buttonPress2}>
		    	<Text style={styles.textButton}>Pedir Medicamentos</Text>
		    	<Image style={styles.img2} source={require('../images/btn2.jpg')}/>
		    </TouchableOpacity>

		    <TouchableOpacity onPress={() => navigate('Calendar', {name: 'calendar'})} style={styles.buttonPress3}>
		    	<Text style={styles.textButton}>Mi perfil</Text>
		    	<Image style={styles.img} source={require('../images/btn3.jpg')}/>
		    </TouchableOpacity>
        </View>
    );
  }
}

/*Estilos de la vista inicial*/
const styles = StyleSheet.create({
 button: {
   backgroundColor: "#fff",
   width: "70%"
 },
 textButton: {
 	color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'center',
    marginTop: 20,
    zIndex: 10
 },
 buttonPress1: {
    alignItems: 'center',
    backgroundColor: '#37b7ff',
    padding: 10,
    marginTop: 30,
    width: '50%',
    height: 100,
    marginLeft: '25%',
    borderRadius: 5
 },
 buttonPress2: {
    alignItems: 'center',
    backgroundColor: '#2d92cc',
    padding: 10,
    marginTop: 30,
    width: '50%',
    height: 100,
    marginLeft: '25%',
    borderRadius: 5
 },
 buttonPress3: {
    alignItems: 'center',
    backgroundColor: '#1c5b80',
    padding: 10,
    marginTop: 30,
    width: '50%',
    height: 100,
    marginLeft: '25%',
    borderRadius: 5
 },
 img:{
 	height: 100,
 	width: 180,
 	marginTop: -57,
 	resizeMode: "stretch",
 	opacity: 0.2
 },
 img2:{
 	height: 100,
 	width: 180,
 	marginTop: -80,
 	resizeMode: "stretch",
 	opacity: 0.2
 }
 })


export default Home;