import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const HelloWorld = () => {
  return (
    <View>
      <Text style={styles.hello}>Hello, World</Text>
    </View>
  );
};
var styles = StyleSheet.create({
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld,
);