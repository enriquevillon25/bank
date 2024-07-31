import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useAuth} from '../../../hooks/useAuth';
import {UserContext} from '../../../context/UseContext';

export const LoginScreen = () => {
  const {email, password, handlePassword, handleEmail, isLoading} = useAuth();
  const {sendLogin} = useContext(UserContext);
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => handleEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => handlePassword(text)}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => sendLogin()}
        loading={isLoading}>
        Send
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    gap: 20,
    backgroundColor: 'white',
  },
});
