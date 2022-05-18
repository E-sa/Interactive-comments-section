import { FC } from "react";
import { AddReply_Interface } from './interfaces'
import UserImage from "./UserImage";
import { useState } from "react";
import data from "./data.json";


const AddReply: FC<AddReply_Interface> = ({ theComments, setComments, replyingtoUsername, replyingtoid, closeReplyBox, useThisId }) => {

    const [textarea_Value, settextarea_Value] = useState("")



    const submit = (e: any) => {
        e.preventDefault();

        const arr = {
            "id": useThisId,
            "content": textarea_Value,
            "createdAt": "1 week ago",
            "score": 0,
            "replyingTo": replyingtoUsername,
            "user": {
                "image": {
                    "png": data.currentUser.image.png,
                    "webp": data.currentUser.image.webp
                },
                "username": data.currentUser.username
            }
        }
        const halla2 = [...theComments]
        halla2.map((item, index) => {
            if (item.id === replyingtoid) {
                //here
                item.replies = [...item.replies, arr]
            }
        })

        setComments(halla2)
        settextarea_Value("")

        console.log(useThisId)

        closeReplyBox();

    }



    const setvalue = (e: any) => {
        settextarea_Value(e.target.value)
    }


    return (

        <div className="add-comment-container">

            <UserImage image={data.currentUser.image.png} size={2} />

            <form className="add-comment-form">

                <textarea
                    className="add-comment-textarea"
                    onChange={setvalue}
                    value={textarea_Value}
                    placeholder="add a comment ..." />

                <button
                    onClick={submit}
                    className="add-commet-submit-button" >Reply</button>

            </form>

        </div >
    )






}


export default AddReply;