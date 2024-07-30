import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {BaseCard} from '../components/baseCard/BaseCard';
import {Loading} from '../../components/Loading';

export const HomeScreen = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.infoContainer}>
          <Text> Bienvenidos al banco BCP</Text>
          <BaseCard />
        </View>
        <View style={styles.operationContainer}>
          <Text> Bienvenidos al banco BCP</Text>
          <BaseCard />
        </View>
      </ScrollView>
      <Loading />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: '#000080',
    height: '50%',
  },
  operationContainer: {
    height: '50%',
  },
});
