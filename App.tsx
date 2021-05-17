import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './src/constant/firebase'
import MainNav from './src/navigation/mainNavigation'

export default function App() {
  return <MainNav />
}
