import { FC } from "react";
import  {ReactComponent as Edit_icon} from "./images/icon-edit.svg";
import {Edit_Interface } from './interfaces'


const Edit_button: FC<Edit_Interface> = ({onClick}) => {


    

    return (

        <div className="edit-button-container" onClick={()=>onClick("yes")}>
            <Edit_icon /> Edit
        </div>


    )

}


export default Edit_button;