import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaksScreen from './src/screens/Tasks';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = ({children, title}) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <TaksScreen/>
      </SafeAreaView>
    </Provider>
  )};

const styles = StyleSheet.create({


});

export default App;
