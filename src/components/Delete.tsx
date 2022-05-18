import { FC } from "react";
import { ReactComponent as Trashbin_icon } from "./images/icon-delete.svg";
import React, { useEffect } from "react";
import Delete_message from "./Delete_message";
import { useState } from 'react';
import { Delete_Interface } from './interfaces'

const Delete_Button: FC<Delete_Interface> = ({ theComments, setComments, commentID }) => {

    const [isClicked, setClicked] = useState(false);


    useEffect(() => {
        if (isClicked)
            document.body.style.overflow = "hidden";
    }, [isClicked]);


    const deleteIt = () => {
        setClicked(!isClicked)
        console.log('hi')
    }

    const response = (e: boolean) => {
        if (e) {

            setClicked(false);
            const newArr = theComments.filter(function (comments) {
                return comments.id !== commentID

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
                isClicked && <Delete_message response={response} />
            }
        </>



    )

}


export default Delete_Button;