
import React, { } from 'react';
import { StyleSheet, View,Image,Text, ImageBackground } from 'react-native';
import FirstWindow from './FirstWindow'



export default function App() {
 
  return (

    

    <View style={styles.container}>
    
    
    <Image 
     style={{ width: "70%", height:'70%', backgroundColor: "black",}}
    source={require("./logga_webb_ny.png")} /> 
    
  < FirstWindow />

   

   
    </View>


    

  );
}

const styles = StyleSheet.create({
  container: {

    width:"100%",
    height:"100%",

  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

  },White: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#0000',
    
    backgroundImageButton:{
  
      width: '100%',
      height: '100%',
      opacity: 1
    },
    
  },
});

