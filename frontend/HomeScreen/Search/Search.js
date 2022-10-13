import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import SearchBar from './SearchBar'
export default function App() {
  return (
    <View >
        <Text>hi</Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
});
