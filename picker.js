import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-community/picker';



class PickerComponent extends Component{


    state = {
        platform: "none"
    }
    
    render(){
        
        return (
           
            <View  style={styles.container}>
                <Picker
                    style={styles.picker}
                    
                    selectedValue={this.state.platform}
                    onValueChange={(itemValue)=> this.getPlatformSelected(itemValue) }
                    
                    >
                    
                    <Picker.Item color="#841584" label='SELECT A PLATFORM' value=''  />
                    <Picker.Item color="#841584" label="Blizzard" value="battle" />
                    <Picker.Item color="#841584" label="Xbox" value="xbl" />
                    <Picker.Item color="#841584" label="PlayStation" value="psn" />
                    
                </Picker>  
            </View>
        )
    }

    getPlatformSelected  = async (context) => {

        this.props.parentCallback(context)
        this.setState({platform  : context})

    };
  
}
const styles = StyleSheet.create({
    container: {
        
      
        width: '50%',
        height:"15%",
    
        borderColor: '#841584',
        borderWidth: 1,
        alignSelf: "center"
        
      

      
       
    
    },
    picker: {
        color: '#841584',
        width: '100%',
        height:"100%",
        textAlign:"center",
        backgroundColor: '#101010',     //  #101010
    
    }
});

export default PickerComponent;
