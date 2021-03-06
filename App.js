/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import AppNavigator from './AppNavigator'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator uriPrefix='/app' />
    );
  }
}
