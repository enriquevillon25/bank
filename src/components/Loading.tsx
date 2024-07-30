import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const Loading = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={'#000080'}
      style={styles.container}
      size={'large'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
