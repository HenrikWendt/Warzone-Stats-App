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
                    
                    <Picker.Item color="#841584" label='Select platform' value=''  />
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
        
        color: "white",
        width: '100%',
        height: '25%',
      

        
     
    
    },
    picker: {
        color: '#841584',
        width: '100%',
        height:'20%',
        //backgroundColor: '#101010',        
    
    }
});

export default PickerComponent;
