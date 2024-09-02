import { StyleSheet, View, StatusBar } from 'react-native';
import Login from './src/screens/login';
import Home from './src/screens/home';
import Loja from './src/screens/loja';
import { useState } from 'react';
import colors from "./src/styles/colors";

export default function App() {
  const [user, setUser] = useState();
  const [loja, setLoja] = useState();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.mainGrey} />
      {!user ? (
        <Login setUser={setUser} />
      ) : !loja ? (
        <Home setUser={setUser} setLoja={setLoja} />
      ) : (
        <Loja loja={loja} setLoja={setLoja} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
