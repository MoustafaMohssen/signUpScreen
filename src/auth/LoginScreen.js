import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import styles from './styles';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = ({ onPressSignUp, onPressGoHome }) => {
  const [state, setState] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!EMAIL_REGEX.test(state.email))
      e.email = 'Enter a valid email';
    if (state.password.length < 6)
      e.password = 'Password must be at least 6 characters';
    return e;
  };

  const onPressLogin = async () => {
    const e = validate();
    setErrors(e);

    // Stop here if validation failed
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    try {
      // FIX: replaced axios with fetch — no dependency needed
      const res = await fetch('https://api.github.com/users/1');
      if (!res.ok) throw new Error('Server error, please try again.');

      // FIX: navigate immediately, no Alert blocking the flow
      if (onPressGoHome) {
        onPressGoHome();
      } else {
        Alert.alert('Error', 'Navigation handler missing.');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { flexGrow: 1 }]}
      keyboardShouldPersistTaps="handled"  // FIX: taps on button work even if keyboard is open
    >
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.signUpBtn, loading && { opacity: 0.7 }]}
        onPress={onPressLogin}
        disabled={loading}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.signUpBtnText}>LOGIN</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.loginText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;