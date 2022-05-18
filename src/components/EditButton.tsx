//edit button and its logo
//onClick initiate the EditMode in parent
import { FC } from "react";
import { ReactComponent as Edit_icon } from "./images/icon-edit.svg";
import { Edit_Interface } from './interfaces'


const EditButton: FC<Edit_Interface> = ({ onClick }) => {

    return (

        <div className="edit-button-container" onClick={() => onClick("yes")}>
            <Edit_icon /> Edit
        </div>


    )

}


export default EditButton;