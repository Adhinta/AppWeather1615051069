import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class Cuaca extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          suhu: 0
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=5ef2046bb4aeee04bfdf11d831db12e34&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          suhu: responseJson.main.suhu
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.box2}>
            <Text style={{ textAlign: 'center', padding: 5, fontSize: 20 }} >Nama Kota yang dipilih</Text>
              <TextInput style = {styles.text1}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />

              <Button
              onPress={
                () => this.getWeather()
              }
              title="Masukkan"
              color="#ff9800"
              accessibilityLabel="Klik untuk masuk"
              />
          </View>
          <View style={styles.box3}>
            <Text style = {{padding: 10, fontSize: 20}} >
              Kota = {this.state.city} {"\n"}
              Cuaca = {this.state.forecast.main} {"\n"}
              Description = {this.state.forecast.description} {"\n"}
              Suhu = {this.state.forecast.suhu} {"'Celcius"}
            </Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text1}>Copyright@pratama</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#f44336',
    flex: 1,
    flexDirection: 'column',
  },

  box1: {
    backgroundColor: '#c62828',
    flex: 1,
    justifyContent: 'center'
  },

  box2: {
    backgroundColor: '#e53935',
    flex: 2,
    justifyContent: 'space-around'

  },

  box3: {
    backgroundColor: '#ffeb3b',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#ffff8d',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box5: {
    backgroundColor: '#ff9800',
    flex: 1,
    margin: 10
  },

  box6: {
    width: 50,
     height: 50,
     backgroundColor: '#c62828',
     justifyContent: 'center',
     alignItems: 'center',
  },

  box7: {
    backgroundColor: '#ffff8d',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  text: {
    padding: 30, fontSize: 20, color: '#000000', textAlign: 'center'
  },

  text1: {
    padding: 30, fontSize: 20, color: '#000000', textAlign: 'center', fontWeight:'bold'
  }

});
