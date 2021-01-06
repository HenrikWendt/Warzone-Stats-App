
import React, { } from 'react';
import { StyleSheet, View,Image,Text } from 'react-native';
import FirstWindow from './FirstWindow'



export default function App() {
 
  return (

    

    <View style={styles.container}>
    
    
    <Image 
     style={{ width: "100%", height:1, backgroundColor: "black",paddingTop: 200,}}
    source={require("./logga3.png")} /> 
    
  < FirstWindow />

   

   
    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },White: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#fff',
    
  },
});

