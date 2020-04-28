import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './src/Home';
import Signup from './src/Signup';
import Listservice from './src/Listservice';
import Reset from './src/Reset';
import Main from './src/Main';



export default class App extends Component {
  render() {
    return (
      <Listservice/>

    );
  }
}
