import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  var TextInputValue = "<answer goes here>";
  const handlePress = () => console.log(TextInputValue)
  const handleChangeText = () => console.log (TextInputValue)
  return (
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
      
<View
style={{ width: "100%", height: "30%", backgroundColor: "lightblue", textAlign:"center"}}> 
 <h1 style={{ fontWeight:"bolder", fontSize:"35px"}}>
      Hello World! </h1>

      <text style={{fontSize:"20px", fontWeight:"bold"}}>
        First React Native App
        <p style={{fontWeight:"normal", fontSize:"15px"}}>This is a paragraph explaining what the app is all about!</p>
      </text>
      
      
    </View>
    <text style = {{fontWeight:"bold", margin:"20px"}}>
      What would you like to get out of this course?
    </text>

    <TextInput style ={{backgroundColor: "lightblue", width:"400px" , textAlign:"center", height:"120px", margin:"5px"}}placeholder="Initial Text"  onChangeText={handleChangeText}/>

    <text style={{fontWeight:"bold" , margin:"20px"}}>An emoji describing how you are feeling about the course:</text>

    <Image style={{width:150, height:150, marginBottom:"15px"}} source={require('./assets/icon.png')}/>


    <Button title = "submit" onPress = {handlePress} color = "darkblue"/>

    
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
  
  },
});
