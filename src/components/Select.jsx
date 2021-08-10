import { useState } from "react";
import buttonsData from "../buttonData";
import TipButton from "./TipButton";

export default function SelectTip(props) {
    

    const handleClick = (e) => {
        const activeButton = document.getElementById(e.target.id);
        activeButton.classList.add("active");   
    }

    // const removeActive = () => {
        
    // }

    const handleChange = (e) => {
        props.handleChange(e.target.value);
    }

    const onTipClick = (data) => {
        props.onTipClick(data)
    }

    return(
        <div className="tip--section">
            <h1 className="labels">Select Tip %</h1>
            <div className="tip--container">
            {buttonsData.map(button =>
                <TipButton
                key = {button.key} 
                label = {button.label}
                id = {button.id}
                value = {button.value}
                onClick = {onTipClick}
                currentTip = {props.currentTip}
                />            
            )}
                <div  id="custom" className="tip--custom"><input onChange={handleChange} type="number" placeholder="Custom" value={props.customTip}/></div>
            </div>
        </div>
    )
};