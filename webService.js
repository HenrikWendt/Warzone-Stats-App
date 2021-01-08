import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview'

class WebService extends Component{


    
    constructor(props){
        super(props);
        this.state = {
           
        }
        
    }
  
    
        render(){
            let username = "Email";
            let password = "Password";
       
            let injectScriptUsername = "javascript:document.getElementById('username').value = '"+username+"'; javascript:document.getElementById('password').value = '"+password+"'; document.getElementById('login-button').click();";
           
           return(

            <WebView
            injectedJavaScript={injectScriptUsername}
            source={{ uri: 'https://profile.callofduty.com/cod/login' }}
            style={{ marginBottom: 500, marginLeft: 500, backgroundColor: 'black'}}
            
            />
         
        )
           
        }
    
      
    }
    const styles = StyleSheet.create({
        container: {
            
            borderColor: 'black',
            borderWidth: 1,
            color: 'black',
            backgroundColor: '#000000',
            height: '50%',
            alignItems: 'center',
            marginTop: 20
           // paddingLeft: 85,
        
        }, White: {
            color: '#fff',
           
           
            paddingBottom: 100,
            fontWeight: 'bold' },
          Black: {
            color: '#000000'
          },
    });
    
    export default WebService;