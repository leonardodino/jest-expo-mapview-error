import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView initialRegion={initialRegion} style={styles.map}/>
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
  },
  map: {
    alignSelf: 'stretch',
    flex: 1
  },
});
