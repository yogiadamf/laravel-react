import React from 'react'
import { useEffect } from "react";

export default function Dashboard(){
    useEffect(() => {
        document.title = "Dashboard"
    }, []);
    return(
        <h1>Dashboard</h1>
    )
}