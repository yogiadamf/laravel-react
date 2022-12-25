import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
    const [open,setOpen] = useState(true);

    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ?"w-72" : "w-20"} text-white`}>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer pr-2" onClick={()=>setOpen(!open)}/>
            </div>
            <div className="p-7">
                <h1 className="text-2xl font-semibold">Home Page</h1>
            </div>
        </div>
    );
}
