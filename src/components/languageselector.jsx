
import React from "react";
import "../index.css"

const languages=[
    {code:"en",lang:"English"},
    {code:"fr",lang:"French"},
    {code:"hi",lang:"Hindi"}

];

const Languageselector=()=>{
    let changeLanguage=()=>{

    }
    return(
        <div className="btn-container">
            {
                languages.map((lng)=>{
                    return (
                     <button key={lng.code} onClick={()=>changeLanguage()}>
                        {lng.lang}
                    </button>
                    )
                })
            }
        </div>
    )};

    export default Languageselector;
