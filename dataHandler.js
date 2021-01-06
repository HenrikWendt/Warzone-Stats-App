import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

class DataHandler extends Component{

    constructor(props){
        super(props);
        this.state = {
            JsonObject: this.props.dataToHandler,
        
           
        }
        
    }
  
    
        render(){
           
            const {JsonObject} = this.state;
            let killsToKdUp = null;

            let soloKd = "no data"
            let soloHs = "no data"
            let soloGulag = "no data"

            let duoKd = "no data"
            let duoHs = "no data"
            let duoGulag = "no data"

            let trioKd = "no data"
            let trioHs = "no data"
            let trioGulag = "no data"

            let quadKd = "no data"
            let quadHs = "no data"
            let quadGulag = "no data"



            if(JsonObject.status !== undefined) {
            const kills = JsonObject.data.lifetime.mode.br.properties.kills;
            const deaths = JsonObject.data.lifetime.mode.br.properties.deaths;
            const kd = JsonObject.data.lifetime.mode.br.properties.kdRatio; 
            let number = kd;
            number = number.toFixed(2);
            number = number + 5

            console.log(number)

            for (var i=0; i < 9999999; i++) {
                
                console.log(((kills+i)/deaths));

                if ((kills+i)/deaths >= number) {

                    killsToKdUp = i;
                    break;

                }


            } 

        }

        if(JsonObject.data.weekly.mode.br_brsolo !== undefined ) {

            soloKd = JsonObject.data.weekly.mode.br_brsolo.properties.kdRatio;
            soloHs =JsonObject.data.weekly.mode.br_brsolo.properties.headshots;
            soloGulag = JsonObject.data.weekly.mode.br_brsolo.properties.gulagDeaths;

        }
        if(JsonObject.data.weekly.mode.br_brduos !== undefined ) {

            duoKd = JsonObject.data.weekly.mode.br_brduos.properties.kdRatio;
            duoHs =JsonObject.data.weekly.mode.br_brduos.properties.headshots;
            duoGulag = JsonObject.data.weekly.mode.br_brduos.properties.gulagDeaths;

        }
        if(JsonObject.data.weekly.mode.br_brtrios !== undefined ) {

            trioKd = JsonObject.data.weekly.mode.br_brtrios.properties.kdRatio;
            trioHs =JsonObject.data.weekly.mode.br_brtrios.properties.headshots;
            trioGulag = JsonObject.data.weekly.mode.br_brtrios.properties.gulagDeaths;

        }
        if(JsonObject.data.weekly.mode.br_brquads !== undefined ) {

            quadKd = JsonObject.data.weekly.mode.br_brquads.properties.kdRatio;
            quadHs =JsonObject.data.weekly.mode.br_brquads.properties.headshots;
            quadGulag = JsonObject.data.weekly.mode.br_brquads.properties.gulagDeaths;

        }
      

           return(
            
            <View  style={styles.container}>

                <ImageBackground  style= { styles.backgroundImage } source={require("./wp2831956.png")}>

                   

                        <Text style={styles.First}> {JsonObject.data.username} </Text>
                        <Text style={styles.Headline}> Warzone total stats: </Text>
                        <Text style={styles.White}> {"Kills: " + JsonObject.data.lifetime.mode.br.properties.kills} </Text>
                        <Text style={styles.White}> {"Deaths: " + JsonObject.data.lifetime.mode.br.properties.deaths} </Text>
                        <Text style={styles.White}> {"Kd ratio: " + JsonObject.data.lifetime.mode.br.properties.kdRatio} </Text>
                        <Text style={styles.White}> {"Kills to kd will increase: " + killsToKdUp} </Text>
                        <Text style={styles.White}> {"Downs: " + JsonObject.data.lifetime.mode.br.properties.downs} </Text>
                        <Text style={styles.White}> {"Wins: " + JsonObject.data.lifetime.mode.br.properties.wins} </Text>
                        <Text style={styles.Headline}> Warzone weekly solos stats: </Text>
                        <Text style={styles.White}> {"Kd ratio: " + soloKd} </Text>
                        <Text style={styles.White}> {"Headshots: " + soloHs} </Text>
                        <Text style={styles.White}> {"Gulag deaths: " + soloGulag} </Text>
                        <Text style={styles.Headline}> Warzone weekly duos stats: </Text>
                        <Text style={styles.White}> {"Kd ratio: " +duoKd} </Text>
                        <Text style={styles.White}> {"Headshots: " + duoHs} </Text>
                        <Text style={styles.White}> {"Gulag deaths: " + duoGulag} </Text>
                        <Text style={styles.Headline}> Warzone weekly trios stats: </Text>
                        <Text style={styles.White}> {"Kd ratio: " + trioKd} </Text>
                        <Text style={styles.White}> {"Headshots: " + trioHs} </Text>
                        <Text style={styles.White}> {"Gulag deaths: " + trioGulag} </Text>
                        <Text style={styles.Headline}> Warzone weekly quads stats: </Text>
                        <Text style={styles.White}> {"Kd ratio: " +  quadKd} </Text>
                        <Text style={styles.White}> {"Headshots: " + quadHs} </Text>
                        <Text style={styles.White}> {"Gulag deaths: " + quadGulag} </Text>
                
                  
                </ImageBackground>
            </View>
            
        )
           
        }
    
      
    }
    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,
            height: '90%',
           // paddingLeft: 85,
        }, 
        White: {
            color: '#fff',
            textAlign: 'left',
        },
        First: {
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize:20
            },
        Headline: {
            color: '#fff',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize:15,
            paddingBottom: 5
            },
            backgroundImage:{
                flex: 1,
                width: '100%',
                height: '100%',
                opacity: 1
            },
         
    });
    
    export default DataHandler;

