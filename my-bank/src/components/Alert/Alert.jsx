import React, { useEffect } from "react";
import './Alert.styles.css';
import { useGlobalContext } from "../../context";

const Alert = ()=>{
    const {alert,showAlert,accountsList} = useGlobalContext();
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            // showAlert with no parameters will remove the alert
            showAlert();
        },3000);
        return ()=>clearTimeout(timeout);
    },[accountsList,showAlert])
    return (
        <div className={`alert ${alert.type}`}>
            <p>{alert.msg}</p>
        </div>
    )
}

export default Alert;