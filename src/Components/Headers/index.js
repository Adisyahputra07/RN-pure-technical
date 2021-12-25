import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Headers() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>HOW TO USE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },

  main: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
