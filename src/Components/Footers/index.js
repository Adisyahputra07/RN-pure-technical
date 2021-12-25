import {Button, Box} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Footers() {
  return (
    <View style={styles.container}>
      <Box style={styles.main}>
        <Button success>
          <Text>GOT IT</Text>
        </Button>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 30,
    height: 100,
  },

  main: {
    height: 100,
    width: 150,
    borderRadius: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
