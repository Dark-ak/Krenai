// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Screen from './Screen/';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
