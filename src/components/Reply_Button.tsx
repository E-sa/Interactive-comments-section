import { FC } from "react";
import { ReactComponent as Reply_Icon } from "./images/icon-reply.svg";

import { useState } from 'react';

interface name {
    onClickReply: (a: boolean) => void;
}

const ReplyButton: FC<name> = ({ onClickReply }) => {



    const [isClicked, setClicked] = useState(true);

    const toggle = () => {
        setClicked(!isClicked)
        onClickReply(isClicked)
    }

    return (

        <div className="reply-button" onClick={toggle}>
            <Reply_Icon className="reply-icon" /> Reply
        </div>

    )

}


export default ReplyButton;