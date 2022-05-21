import { FC } from "react";


interface one_arg_string {
    content: string,
    replyingTo?: string
}

const Content: FC<one_arg_string> = ({ content, replyingTo }) => {

    return (

        <p className="content-p">
            {replyingTo &&
                <span className="replyingTo-text">@{replyingTo} </span>
            }
            {content}
        </p>
    )

}


export default Content;