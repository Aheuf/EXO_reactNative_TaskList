import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaksScreen from './src/screens/Tasks';

const App = ({children, title}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TaksScreen/>
    </SafeAreaView>
  )};

const styles = StyleSheet.create({


});

export default App;
