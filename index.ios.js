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
  constructor(props) {
    super(props);
    this.state = {
      weight: '0', // string because TextInput
      height: '0',
      bmi: 0
    }
    this.compute = this.compute.bind(this);
  }

  compute() {
    console.log('Computing...');
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
    let bmi = weight / Math.pow(height, 2) * 703;
    this.setState({bmi});
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculate Your BMI!</Text>
        <View style={styles.group}>
          <Text style={styles.label}>Weight (LB)</Text>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              value={this.state.weight}
              onChangeText={(weight) => { this.setState({weight}) }}
            />
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Height (IN)</Text>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              value={this.state.height}
              onChangeText={(height) => { this.setState({height}) }}
            />
          </View>
        </View>
        <View style={[styles.group, styles.center]}>
          <Text style={styles.bmi}>BMI: {this.state.bmi.toFixed(2)}</Text>
        </View>
        <View style={[styles.group, styles.center]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.compute}>Compute</Text>
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
  title: {
    fontSize: 30,
    marginBottom: 20
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
