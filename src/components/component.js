import React from 'react';
import '../style/component.css';
import Menubar from './menu';


function component(props){
    
    return(
        <body>
            
            <div class = "bar"></div>
            <input type = "text" class = "setTitle" placeholder = " Title"/>
            <input type = "text" class = "setTag"/>
            <button class = "Tag">Tag Register</button>
            <div class = "setCal"></div>
            <table class = "components">
                <tr>
                    <td>boo</td>
                </tr>
                <tr>
                    <td>boo</td>
                </tr>
            </table>
            <div class = "Paper"></div>
            
            <button class = "confirm">Confirm</button>
            <Menubar group={props.location.state.group} user={props.location.state.user}/>
        </body>
    )
}

export default component;