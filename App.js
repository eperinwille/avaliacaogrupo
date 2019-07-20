import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import RepositoryScreen from './screens/RepositoryScreen';

const AppStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: 'Buscar Repositórios'
    }
  },

  Repository: {
    screen: RepositoryScreen,
    navigationOptions: {
      headerTitle: "Repositório"
    }
  }
},
{
  headerLayoutPreset: 'center'
});

const Navigation = createAppContainer(AppStack);

export default function App() {
  const [ isReady, setReady ] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    setReady(true);
  }

  useEffect(() => {
    loadFonts();
  });

  if (!isReady) {
    return (
      <AppLoading/>
    );
  } else {
    return (
      <Container>
        <Navigation/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
