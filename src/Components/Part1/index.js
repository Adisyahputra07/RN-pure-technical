import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function PartOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>PART 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    width: 300,
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },

  main: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
