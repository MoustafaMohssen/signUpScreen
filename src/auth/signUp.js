import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert,} from 'react-native';
import styles from './styles';

const SignUpScreen = ({ onPressLogin }) => {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
  const e = {};

  if (!state.fullName.trim()) e.fullName = 'Full name is required';

  if (!state.email.includes('@') || !state.email.includes('.')) 
    e.email = 'Enter a valid email';

  if (state.password.length < 6) e.password = 'Password must be at least 6 characters';

  if (state.confirmPassword !== state.password) 
    e.confirmPassword = 'Passwords do not match';

  return e;
};

  const onPressSignUp = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      Alert.alert('Success', `Welcome, ${state.fullName}! Your account has been created.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          placeholderTextColor="#5c6262"
          onChangeText={text => setState({ ...state, fullName: text })}
          value={state.fullName}
        />
      </View>
      {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#5c6262"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setState({ ...state, email: text })}
          value={state.email}
        />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#5c6262"
          secureTextEntry
          onChangeText={text => setState({ ...state, password: text })}
          value={state.password}
        />
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#5c6262"
          secureTextEntry
          onChangeText={text => setState({ ...state, confirmPassword: text })}
          value={state.confirmPassword}
        />
      </View>
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}

      <TouchableOpacity style={styles.signUpBtn} onPress={onPressSignUp}>
        <Text style={styles.signUpBtnText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;