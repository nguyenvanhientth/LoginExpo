import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import scanScreen from './src/component/scanScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <scanScreen />
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
});
