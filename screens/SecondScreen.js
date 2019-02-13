/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class SecondScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('FirstScreen')}>Second Screen!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#669900',
  },
  button: {
    width: '50%',
    padding: 30,
    backgroundColor: '#000000',
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffffff',
  }
});
