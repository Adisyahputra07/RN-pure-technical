import {PresenceTransition} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {PartOne, PartTwo, PartThree, Headers, Footers} from '../../Components';

export default function Home() {
  const [loadHeader, setLoadHeader] = useState(false);
  const [loadOne, setLoadOne] = useState(false);
  const [loadTwo, setLoadTwo] = useState(false);
  const [loadThree, setLoadThree] = useState(false);
  const [loadFooter, setLoadFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadHeader(true);
    }, 2000);

    setTimeout(() => {
      setLoadOne(true);
    }, 2500);

    setTimeout(() => {
      setLoadTwo(true);
    }, 3000);

    setTimeout(() => {
      setLoadThree(true);
    }, 3500);

    setTimeout(() => {
      setLoadFooter(true);
    }, 4000);
  }, [loadOne]);
  return (
    <View style={styles.container}>
      <PresenceTransition
        visible={loadHeader}
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1000,
          },
        }}>
        {loadHeader ? <Headers /> : null}
        {loadOne ? <PartOne /> : null}
        {loadTwo ? <PartTwo /> : null}
        {loadThree ? <PartThree /> : null}
        {loadFooter ? <Footers /> : null}
      </PresenceTransition>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
  },
});
