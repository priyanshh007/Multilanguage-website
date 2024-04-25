
import React from "react";
import "../index.css";
import {useTranslation} from "react-i18next"

const languages=[
    {code:"en",lang:"English"},
    {code:"fr",lang:"French"},
    {code:"hi",lang:"Hindi"}

];

    const Languageselector=()=>{
    const {i18n}=useTranslation();
    
    let changeLanguage=(lng)=>{
        i18n.changeLanguage(lng);
    }
    return(
        <div className="btn-container">
            {
                languages.map((lng)=>{
                    return (
                     <button 
                     key={lng.code} 
                     className={lng.code===i18n.language?"selected":""}
                     onClick={()=>changeLanguage(lng.code)}>
                        {lng.lang}
                    </button>
                    )
                })
            }
        </div>
    )};

    export default Languageselector;
