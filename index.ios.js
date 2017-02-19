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
        <View style={styles.group}>
          <Text style={styles.label}>Weight (LB)</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Height (IN)</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={[styles.group, styles.center]}>
          <Text style={styles.bmi}>BMI: 0.00</Text>
        </View>
        <View style={[styles.group, styles.center]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Compute</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  group: {
    marginTop: 20,
  },
  inputContainer: {
    height: 40
  },
  input: {
    padding: 10,
    flex: 1,
    borderWidth: 1
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20
  },
  label: {
    fontSize: 20
  },
  bmi: {
    fontSize: 20
  },
  center: {
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('BMI', () => BMI);
