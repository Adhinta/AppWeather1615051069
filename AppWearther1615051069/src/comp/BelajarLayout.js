import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 30 }} >ini HEADER </Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize:50 }}>Slider </Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text>1 </Text></View>
        <View style={styles.button}><Text>2 </Text></View>
        <View style={styles.button}><Text>3 </Text></View>
        <View style={styles.button}><Text>4 </Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text>5 </Text></View>
        <View style={styles.button}><Text>6</Text></View>
        <View style={styles.button}><Text>7 </Text></View>
        <View style={styles.button}><Text>8 </Text></View>
      </View>
      <View style={styles.box6}>
        <View style={styles.button}><Text>9 </Text></View>
        <View style={styles.button}><Text>10</Text></View>
        <View style={styles.button}><Text>11</Text></View>
        <View style={styles.button}><Text>12</Text></View>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 50 }}>Fooster </Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: 'orange',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box6: {
    flex: 1,
    backgroundColor: 'orange',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
