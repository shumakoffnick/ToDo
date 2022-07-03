import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Check = ({isCompleted})=>{
    return(
        <>
        <div className="borderIcon">{isCompleted &&
        <FontAwesomeIcon className="iconCheck" icon={faCheck}/>
        }
        </div>
        </>
    )
}
export default Check