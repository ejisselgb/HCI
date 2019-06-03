import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

class Medicamentos extends Component{
	generateAlert(){
    console.log("aiuda");
  }
	render(){
		return(
			  <View style={styles.container}>
            <Image style={{width: 70, height: 70, resizeMode: 'contain',}} source={require('./../images/canyoudieofa.jpg')} />
          	<FlatList
                data={[
                  {key: 'Medicamentos'},
                ]}
            renderItem={({item}) => <Text style={styles.item2}>{item.key}</Text>}
            />
            <FlatList
                data={[
                  {key: 'Paracetamol'},
                  {key: 'Goticas pa los ojos'},
                  {key: 'Vip Vaporrup'},
                  {key: 'Isodine'},
                  {key: 'Dolex'},
                  {key: 'Curitas'},
                  {key: 'Dolex gripa'},
                  {key: 'Advil'},
                ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  item2: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#ff0000',
  },
})

export default Medicamentos;