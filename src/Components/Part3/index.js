import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function PartThree() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>PART 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    width: 300,
    height: 80,
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
