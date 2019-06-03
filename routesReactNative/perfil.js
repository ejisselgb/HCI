import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

class Perfil extends Component{
  generateAlert(){
    console.log("aiuda");
  }
  render(){
    return(
        <View style={styles.container}>
            <Image style={{width: 70, height: 70, resizeMode: 'contain',}} source={require('./../images/canyoudieofa.jpg')} />
            <FlatList
                data={[
                  {key: 'DATOS USUARIOS'},
                  {key: 'Nombre:Juan'},
                  {key: 'Edad: 50'},
                  {key: 'HISTORIAL DE CITAS'},
                  {key: 'Cita Ojos 3:00 PM'},
                  {key: 'Cita Corazon 4:00 PM'},
                  {key: 'Cita Dolor Garganta 7:00 PM'},
                  {key: 'Cita Amigdalitis 8:00 AM'},
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
})

export default Perfil;