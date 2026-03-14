import React from "react";
import { JollofRiceEntrees } from "./foodData";
import NavBar from "../Components/Navbar/navBar";
import { useParams } from "react-router-dom";

function foodDetails(){
    const { id } = useParams()
    const food = JollofRiceEntrees.find((item) => item.id === Number(id))

    return(
        <div>
            <NavBar/>
            <p>Win</p>
        </div>
    )
}

export default foodDetails