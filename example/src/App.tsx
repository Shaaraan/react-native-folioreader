import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Folioreader from 'react-native-folioreader';
import RNFetchBlob from "rn-fetch-blob";

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    Folioreader.multiply(3, 7).then(setResult);
    Folioreader.openEpub(RNFetchBlob.fs.dirs.SDCardDir + '/azim.epub')
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
