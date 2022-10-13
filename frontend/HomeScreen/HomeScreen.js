import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search/Search'
export default function HomeScreen() {
  return (
    <View>
      {/* <Header/> */}
      <Search/>
      {/* Recent Global Reviews */}
    </View>
  );
}

const styles = StyleSheet.create({
});
