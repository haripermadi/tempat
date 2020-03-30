/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home'
import DetailPage from './src/screens/Detail'

Icon.loadFont()

const App: () => React$Node = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} initial/>
        <Scene key="detailPage" component={DetailPage} />
      </Scene>
    </Router>
  );
};


export default App;
