import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Agendar extends Component{
	generateAlert(){
    console.log("aiuda");
  }
	render(){
		return(
			<View style={styles.container}>
        		<Button title="Agendar" onPress={this.generateAlert} color="#ff0000"/>
      		</View>
      	);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Agendar;