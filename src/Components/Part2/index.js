import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function PartTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>PART 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    width: 300,
    height: 350,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },

  main: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
