import { FC } from "react";
import { Reply_Interface } from './interfaces';
import { useState } from 'react';


import ScoreBox from "./ScoreBox";
import UserImage from "./UserImage";
import CreatedAt from "./CreatedAt";
import Content from "./Content";
import Username from "./Username";
import Reply_Button from "./Reply_Button";
import Delete_Reply from "./Delete_Reply";
import Edit_button from "./EditButton";
import AddReply from "./AddReply";
import EditMode from "./EditMode";

const Replies: FC<Reply_Interface> = ({ theComments, setComments, reply, commentIndex, thiscommentId }) => {


    const [isReplyClicked, setReplyClicked] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [keeptrackofReplyID, setKeeptrackofReplyID] = useState(100)

    //on reply button clicked it opens replyBox
    const replyClicked = (e: boolean) => {
        setReplyClicked(e)
    }

    //it closes ReplyBox everytime user posts a new Reply
    //it also +1 replyId for next reply
    const closeReplyBox = () => {
        setReplyClicked(false)
        setKeeptrackofReplyID(keeptrackofReplyID + 1)
    }

    //onEditbutton Clickes itactivates editmode
    const EditClicked = (e: string) => {
        setEditMode(true)
    }


    const closeEditMode = () => {
        setEditMode(false);
    }

    return (
        <>


            <div className="each-comment-container">

                <div className="score-box-container">

                    <ScoreBox
                        theComments={theComments}
                        setComments={setComments}
                        commentIndex={commentIndex}
                        replyId={reply.id}
                        type={"reply"}
                        score={reply.score}
                    />

                </div>

                <div className="scoreBox-and-buttons-on-small-screen">
                    <div className="score-box-container-sm">
                        <ScoreBox
                            theComments={theComments}
                            setComments={setComments}
                            commentIndex={commentIndex}
                            replyId={-1}
                            type={"comment"}
                        />
                    </div>
                    {reply.user.username !== "juliusomo"
                        &&
                        <Reply_Button onClickReply={replyClicked} />
                    }

                    {reply.user.username == "juliusomo"
                        &&
                        <div className="delete-and-edit-container">
                            <Delete_Reply theComments={theComments} setComments={setComments} commentID={thiscommentId} replyID={reply.id} />
                            <Edit_button onClick={EditClicked} />
                        </div>
                    }

                </div>
                <div className="comment-header-and-content">

                    <div className="comment-header">

                        <UserImage
                            image={reply.user.image.png}
                            size={1}
                        />

                        <Username username={reply.user.username} />

                        <CreatedAt createdAt={reply.createdAt} />

                        {/* here it checks weather current user is the one who write this comment or not
                        if yes it displays edit and delete button if no it displays reply button  */}
                        <div className="reply-options">

                            {reply.user.username !== "juliusomo"
                                &&
                                <Reply_Button onClickReply={replyClicked} />
                            }

                            {reply.user.username == "juliusomo"
                                &&
                                <div className="delete-and-edit-container">
                                    <Delete_Reply theComments={theComments} setComments={setComments} commentID={thiscommentId} replyID={reply.id} />
                                    <Edit_button onClick={EditClicked} />
                                </div>
                            }
                        </div>

                    </div>

                    {/* onEdit button clicked it display a box for user to edit his/her comment
                    if not it just display the content of the comment */}
                    {
                        !isEditMode &&
                        <Content content={reply.content} replyingTo={reply.replyingTo} />
                    }
                    {
                        isEditMode &&
                        <EditMode
                            theComments={theComments}
                            thisComment={thiscommentId}
                            thisReply={reply}
                            setComments={setComments}
                            closeEditMode={closeEditMode}
                        />
                    }

                </div>


            </div>

            {/* on reply button click a new box with text area appears */}
            {isReplyClicked &&
                <AddReply
                    theComments={theComments}
                    setComments={setComments}
                    replyingtoUsername={reply.user.username}
                    replyingtoid={thiscommentId}
                    closeReplyBox={closeReplyBox}
                    useThisId={keeptrackofReplyID}
                />
            }
        </>


    )

}


export default Replies;