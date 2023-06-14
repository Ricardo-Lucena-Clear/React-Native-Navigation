import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste app</Text>
      <Ionicons name="home" size={25} color="blue" />
      <FontAwesome5 name="user-tie" size={24} color="black" />
      <Feather name="gift" size={24} color="black" />

      <TouchableOpacity style={styles.btnYoutube}>
        <Feather name="youtube" size={24} color="black" />
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYoutube:{
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  btnText:{
    paddingLeft: 10,
    color: 'white'
  }
});
