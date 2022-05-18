//here is a textArea box and a function to make a comment and add it to the all comments OBJ
import { FC } from "react";
import { AddComment_Interface } from './interfaces'
import UserImage from "./UserImage";
import { useState } from "react";


const AddComment: FC<AddComment_Interface> = ({ currentUser, theComments, setComments }) => {

    const [textarea_Value, setTextarea_Value] = useState("")
    const [keeptrackofID, setKeeptrackofID] = useState(100)


    const submit = (e: any) => {
        e.preventDefault();
        const arr = {
            "id": keeptrackofID,
            "content": textarea_Value,
            "createdAt": "1 month ago",
            "score": 0,
            "user": {
                "image": {
                    "png": currentUser.image.png,
                    "webp": currentUser.image.webp
                },
                "username": currentUser.username
            },
            "replies": []
        }
        const setArr = [...theComments, arr];
        setComments(setArr)
        setKeeptrackofID(keeptrackofID + 1)
        setTextarea_Value("")
        

    }


    const setvalue = (e: any) => {
        setTextarea_Value(e.target.value)
    }


    return (

        <div className="add-comment-container">

            <UserImage image={currentUser.image.png} size={2} />

            <form className="add-comment-form">

                <textarea 
                className="add-comment-textarea" 
                onChange={setvalue} 
                value={textarea_Value} 
                placeholder="add a comment ..." required />

                <button onClick={submit} className="add-commet-submit-button" >Send</button>

            </form>

        </div >
    )






}


export default AddComment;