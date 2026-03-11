import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import styles from './styles';

const SignUpScreen = ({ onPressLogin }) => {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [githubUser, setGithubUser] = useState(null);

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

  const fetchGithubUser = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/1');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch GitHub user data.');
    }
  };

  const onPressSignUp = async () => {
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length === 0) {
      setLoading(true);
      try {
        const userData = await fetchGithubUser();
        setGithubUser(userData);
        Alert.alert(
          'Success',
          `Welcome, ${state.fullName}! Your account has been created.\n\nGitHub User Fetched: ${userData.login} (ID: ${userData.id})`
        );
      } catch (error) {
        Alert.alert('Network Error', error.message);
      } finally {
        setLoading(false);
      }
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

      <TouchableOpacity
        style={[styles.signUpBtn, loading && { opacity: 0.7 }]}
        onPress={onPressSignUp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.signUpBtnText}>SIGN UP</Text>
        )}
      </TouchableOpacity>

      {githubUser && (
        <View style={styles.githubCard}>
          <Text style={styles.githubCardTitle}>GitHub User Fetched</Text>
          <Text style={styles.githubCardText}>Login: {githubUser.login}</Text>
          <Text style={styles.githubCardText}>ID: {githubUser.id}</Text>
          <Text style={styles.githubCardText}>Type: {githubUser.type}</Text>
        </View>
      )}

      <TouchableOpacity onPress={onPressLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;