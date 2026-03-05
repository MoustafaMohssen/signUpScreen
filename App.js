import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SignUpScreen from './src/auth/signUp';

const App = () => {
  const [screen, setScreen] = useState('signup'); 

  const onPressLogin = () => setScreen('login');
  const onPressSignUp = () => setScreen('signup');

  if (screen === 'login') {
    return (
      <SafeAreaView style={appStyles.safeArea}>
        <View style={appStyles.placeholder}>
          <Text style={appStyles.placeholderText}>Login Screen</Text>
          <TouchableOpacity onPress={onPressSignUp}>
            <Text style={appStyles.link}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <SignUpScreen onPressLogin={onPressLogin} />
    </SafeAreaView>
  );
};

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#756C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#333232',
    marginBottom: 20,
  },
  link: {
    color: 'white',
    fontSize: 13,
  },
});

export default App;
