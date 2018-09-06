import React,{Component} from 'react';
import defaultState from '../images/off.png'

class TurnedOFF extends Component{
    render(){
        return(
            <img src={defaultState} alt="offState"></img>
        )
    }
}

export default TurnedOFF;