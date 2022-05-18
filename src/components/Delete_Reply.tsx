//this is delete icon component containing a button, by clicking the button <<DeleteWarning>> renders, then response function deal with removing the reply 
import { FC } from "react";
import { ReactComponent as Trashbin_icon } from "./images/icon-delete.svg";
import { useEffect } from "react";
import DeleteWarning from "./DeleteWarning";
import { useState } from 'react';
import { Delete_Reply_Interface } from './interfaces'

const DeleteReply: FC<Delete_Reply_Interface> = ({ theComments, setComments, commentID, replyID }) => {



    const [isClicked, setClicked] = useState(false);


    useEffect(() => {
        if (isClicked)
            document.body.style.overflow = "hidden";
    }, [isClicked]);


    const deleteIt = () => {
        setClicked(!isClicked)

    }

    const response = (e: boolean) => {
        if (e) {

            setClicked(false);
           const newArr=[...theComments]
            newArr.map(items => {

                if (items.id === commentID) {

                    const filterArr = items.replies.filter(function (reply) {

                        return reply.id !== replyID
                    })

                    items.replies = filterArr;

                }

            })
            

            setComments(newArr)
            document.body.style.overflow = "visible";


        }
        else {
            setClicked(false);
            document.body.style.overflow = "visible";

        }

    }

    return (

        <>
            <div className="trashbin-container" onClick={deleteIt}>
                <Trashbin_icon /> Delete
            </div>

            {
                isClicked && <DeleteWarning response={response} />
            }
        </>



    )

}


export default DeleteReply;