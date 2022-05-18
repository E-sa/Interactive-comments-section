//when edit button clicked a textarea with content as placeholder replace the content,
//any changes will be saved by contentNewValue function 
import { FC } from "react";
import { useState } from 'react';
import { EditMode_Interface } from "./interfaces"

const EditMode: FC<EditMode_Interface> = ({ theComments, thisComment, setComments, closeEditMode, thisReply }) => {

    const [updateValue, setUpdateValue] = useState(thisComment.content);
    const [updateReplyValue, setUpdateReplyValue] = useState(thisReply?.content);


    const contentNewValue = (e: any) => {
        if (thisReply) {
            setUpdateReplyValue(e.target.value)
        }
        else {

            setUpdateValue(e.target.value)
        }
    }

    const onUpdate = () => {

        if (!thisReply) {

            const newArr = [...theComments]
            newArr.map(comment => {
                if (comment.id === thisComment.id)
                    comment.content = updateValue
            })

            setComments(newArr);
            closeEditMode();
        }
        else {
            const newContent: string = updateReplyValue!; // 👈️ non-null assertion

            console.log(thisComment)
            const newArr = [...theComments]
            newArr.map(eachComment => {
                if (eachComment.id === thisComment) {
                    eachComment.replies.map(eachReply => {
                        if (eachReply.id === thisReply?.id) {
                            eachReply.content = newContent
                        }

                    })
                }
            })
            setComments(newArr);
            closeEditMode();
            console.log(theComments)

        }
    }


    return (



        <div className="edit-active-container">

            <textarea
                onChange={contentNewValue}
                className="edit-textarea"
                value={thisReply ? updateReplyValue : updateValue} />

            <button
                onClick={onUpdate}
                className="update-button">
                Update</button>

        </div>


    )

}


export default EditMode;