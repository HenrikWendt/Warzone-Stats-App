import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,TextInput, Image, ImageBackground } from 'react-native';
import PickerComponent from './picker'
import WebService from './webService'
import DataHandler from './dataHandler'


class FirstWindow extends Component{

  

  constructor(props){
    
    
    super(props);


    this.setText = this.setText.bind(this);
    this.state = {
        value: '',
        selectedValue: '',
        buttonPress: false,
        loginActive: false,
        statsCheck: false,
        data:'',

      }
  }

  handleCallbackPicker = (childData) =>{

    this.setState({selectedValue: childData})
    

  }

  setText() {


    if(!this.state.buttonPress) {
      this.setState({buttonPress: true})
      this.setState({loginActive: true})

    }else{

      this.setState({buttonPress: false})


    }
    
  }

  setStatsCheck() {


    if(!this.state.statsCheck) {
      this.setState({statsCheck: true})
      this.setState({ value: '',
                      selectedValue: '',
                      data:'',})

    }else{

      this.setState({statsCheck: false})
      


    }
    
  }

  login_XSRFTOKEN  =  () => {
    //Fattan%231678

    console.log(this.state.selectedValue)
    console.log(this.state.value)

    const uName = this.state.value.replace(/#/gi, '%23')

    console.log(uName)


    
    
    fetch('https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/'+ this.state.selectedValue+'/gamer/'+uName+'/profile/type/wz', {
       method: 'GET'
       
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch((error) => {
       console.error(error);
    });

    this.setStatsCheck();

   
 }


render(){

 const {value} = this.state;
 const {selectedValue} = this.state;
 const {buttonPress} = this.state;
 const {loginActive} = this.state;
 const{statsCheck} = this.state;
 const{data} = this.state;

 
 

  let component;
  let DataViewComponent;

  if (buttonPress) {
    component = <WebService />;

    
  } else {      
    component = null ;
  }

  let buttonName;

  if (buttonPress) {
    buttonName = "Close Login"
   
  } else {      
    buttonName = "Click to Start"
  }

  if (statsCheck) {
    if(data.status === "success") {
      DataViewComponent =  <DataHandler dataToHandler = {data} /> ;
    } 
  } else {      
    DataViewComponent = null ;
  }

  let buttonNameStats;

  if (DataViewComponent) {
    buttonNameStats = "Close Stats"
   
  } else if (data.status !== "success" && statsCheck ) {      
    buttonNameStats = "Retry?"
  }else {      
    buttonNameStats = "Get stats"
  }

  return (

    
  <View style={styles.container}>
   

   

  
{ data.status !== "success" && statsCheck ?  


<ImageBackground style= { styles.backgroundImage } source={require("./wp2831956.png")}>

    
<Text style={styles.White}>Loading or something went wrong...</Text>


</ImageBackground> 

: null}


      
{ loginActive && !statsCheck ?   

<TextInput
      
        placeholder="Username"
        placeholderTextColor="#841584"
        
        style={styles.TextInputStyle}
        onChangeText={text => this.setState({value : text})}
        value={this.value}
    />

: null } 
   


    
{ loginActive && !statsCheck ?  

< PickerComponent 
    parentCallback =  {this.handleCallbackPicker}
    /> 
    
  : null }


   {DataViewComponent}



{ !buttonPress ?  

<ImageBackground style= { styles.backgroundImageButton } source={require("./wp2831956.png")}>

<View style = {[{ width: "50%", height: "100%", margin: 10,alignSelf: "center"}]}>

<Button 
      
      
      onPress={this.setText}
      title={buttonName}
      color="#841584"
    >
    </Button>
    </View>

</ImageBackground> 
    
    
     : null }






{ loginActive ? 


<View style = {[{ width: "50%", height: "100%", margin: 10,alignSelf: "center"}]}> 
        
        <Button 
          onPress={this.login_XSRFTOKEN}
          title={buttonNameStats}
          color="#841584"
    
        
        >
        </Button>

</View> 



 : null }

  
{ !statsCheck ?  

component

: null}

{data.status !== "success" && statsCheck ?    
  
  <Image 
     style={{ width: "100%", height:"100%", backgroundColor: "black"}}
    source={require("./wp2831956.png")} /> 
: null }

    
    </View>

    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    
  },
  White: {
    
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    
    fontWeight: 'bold' 
  },
  Black: {
    color: '#000000'
  },
  TextInputStyle:{
    

    width: '50%',
    fontSize:16,
    color: '#841584',
    paddingLeft: 8,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: "#101010",
    borderColor: '#841584',
    borderWidth: 1,
    textAlign:"center",
    alignSelf: "center"
    
  },
  padding: {
    paddingBottom: 200,

  },

  

  button:{
    
    //textAlign: 'center',
    height: 50,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },

  

backgroundImageButton:{
  
  width: '100%',
  height: '100%',
  opacity: 1
},

backgroundImage:{
  
  width: '100%',
  height: '5%',
  opacity: 1
},
});


export default FirstWindow;
