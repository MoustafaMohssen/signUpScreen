import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import SignUpScreen from './src/auth/signUp';
import LoginScreen from './src/auth/LoginScreen';
import HomeScreen from './src/home/HomeScreen';
import FoodDetailScreen from './src/home/FoodDetailScreen';

const App = () => {
  const [screen, setScreen] = useState('signup');
  const [selectedItem, setSelectedItem] = useState(null);

  const onPressLogin  = () => setScreen('login');
  const onPressSignUp = () => setScreen('signup');
  const onPressGoHome = () => setScreen('home');

  const onSelectItem = (item) => {
    setSelectedItem(item);
    setScreen('detail');
  };

  const onBackFromDetail = () => {
    setSelectedItem(null);
    setScreen('home');
  };

  if (screen === 'signup') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SignUpScreen
          onPressLogin={onPressLogin}
          onPressGoHome={onPressGoHome}  // FIX: was missing
        />
      </SafeAreaView>
    );
  }

  if (screen === 'login') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LoginScreen
          onPressSignUp={onPressSignUp}
          onPressGoHome={onPressGoHome}
        />
      </SafeAreaView>
    );
  }

  if (screen === 'detail') {
    return (
      <SafeAreaView style={{ flex: 1 }}>  {/* FIX: was missing SafeAreaView */}
        <FoodDetailScreen item={selectedItem} onBack={onBackFromDetail} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>   {/* FIX: was missing SafeAreaView */}
      <HomeScreen onSelectItem={onSelectItem} />
    </SafeAreaView>
  );
};

export default App;