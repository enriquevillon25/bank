import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {BaseCard} from '../components/baseCard/BaseCard';
import {Loading} from '../../components/Loading';
import {Text} from 'react-native-paper';

export const HomeScreen = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.infoContainer}>
          <Text> Bienvenidos al banco BCP</Text>
          {/* <BaseCard title={'Hola'} content="hola" /> */}
        </View>
        <View style={styles.operationContainer}>
          {/* <BaseCard title={'Donaciones'} content="hola" /> */}
          <BaseCard bgColor="#000080">
            <Text style={{color: 'white'}} variant="titleLarge">
              Cambia soles y dólares
            </Text>
            <Text style={{color: 'white'}} variant="titleSmall">
              Cuando quieras, donde quieras
            </Text>
          </BaseCard>
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
