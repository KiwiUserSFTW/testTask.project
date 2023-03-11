import React from "react";
import useConversionData from "../../hooks/useConversionData";
import HeaderDiv from "./HeaderDiv/HeaderDiv";
import { useState } from "react";

export default function Header(props) {
let data = useConversionData();
let {UAH = "waiting data", EUR} = useConversionData();
    return (
        <div className="Header">
        <HeaderDiv> 
            USD {UAH}<br/>
            EUR {EUR}
        </HeaderDiv>
        </div>
    )
}
