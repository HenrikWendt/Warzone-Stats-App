import React, {useState,} from 'react'
import '../App.css';
import axios from 'axios';

export default function Search() {

    const [username, setUsername] = useState("");
    const [platform, setPlatform] = useState("");
    
    function submit() {
        console.log(username);
        console.log(platform);

        var host = window.location.hostname; 

        axios.get("http://"+ host +":9000/fetchStats", {
        params: {
            username: username,
            platform: platform
        }
        })
        .then(res => {
            console.log(res);
        }) 
        }

    function handleChange(e) {
        if(e.target.name =="username") {
            setUsername(e.target.value);
        }else {
            setPlatform(e.target.value);
        }
    }

  return (
    <div  id="Search">
        <div id="row">
            <label>Enter username: </label>
        </div>
        <div id="row">
            <input type="text" id= "inpiutField-username"  name="username" onChange={handleChange}/> 
        </div>
         <div id="row">
            <label>Select a platform: </label>
        </div>
        <div id="row">
            <select id="inpiutField-platform" name="platform" onChange={handleChange}>
                <option  disabled="disabled" selected="selected" value="null"></option>
                <option value="blizzard">Blizzard</option>
                <option value="xbox">Xbox</option>
                <option value="playstation">PlayStation</option>
            </select>
        </div>
        <div id="row">
             <button name="getStatsButton" id="getStatsButton" onClick={() => submit()}> Get Stats</button>
        </div>
    </div>
  )
}
