import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, PresenceTransition} from 'native-base';

import {Home} from './Pages';

export default function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
    }, 6000);
  }, [load]);
  return (
    <NativeBaseProvider>
      <PresenceTransition
        visible={load}
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1000,
          },
        }}>
        <Home />
      </PresenceTransition>
    </NativeBaseProvider>
  );
}
