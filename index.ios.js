import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class BMI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Weight (LB)</Text>
        <Text>Height (IN)</Text>
        <Text>BMI</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('BMI', () => BMI);
