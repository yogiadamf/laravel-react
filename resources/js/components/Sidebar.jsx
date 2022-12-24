import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="bg-dark-purple h-screen p-5 pt-8 w-72 text-white">
            <FontAwesomeIcon icon={faBars} className="cursor-pointer"/>
            </div>
            <div className="p-7">
                <h1 className="text-2xl font-semibold">Home Page</h1>
            </div>
        </div>
    );
}
