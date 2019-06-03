import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component{
	generateAlert(){
    console.log("aiuda");
  }
	render(){
    const {navigate} = this.props.navigation;
		return(

            <View style={styles.container}>
              <View>
              <Image style={{width: 70, height: 70, resizeMode: 'contain',}} source={require('./../images/canyoudieofa.jpg')} />
              </View>

              <View>
            	<Button title="       Agendar      " onPress={()=>navigate('Agendar')} color="#ff0000"/>
              </View>
              <View style={styles.button}>
              <Button title="Medicamentos" onPress={()=>navigate('Medicamentos')} color="#ff0000"/>
              </View>
              <View style={styles.button}>
              <Button title="       Mi Perfil      " onPress={()=>navigate('Perfil')} color="#ff0000"/>
              </View>
            </View>

    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  }
});

export default Menu;