import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
<View
style={{ width: "100%", height: "30%", backgroundColor: "lightblue", textAlign:"center" }}> 
 <text style={{ fontWeight:"bolder", fontSize:"30px"}}>
      Hello World! </text>

      <text style={{fontWeight:"normal", fontSize:"20px", fontWeight:"bold", textAlign:"center"}}>
        First React Native App
      </text>
      
    </View>
</View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
