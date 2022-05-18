import { EachComment_Interface } from "./interfaces";
import { FC } from "react";
import { useState } from 'react';

import ReplyButton from "./Reply_Button";
import ScoreBox from "./ScoreBox";
import UserImage from "./UserImage";
import CreatedAt from "./CreatedAt";
import Content from "./Content";
import Username from "./Username";
import Replies from "./Replies";
import DeleteButton from "./Delete_Comment";
import EditButton from "./EditButton";
import AddReply from "./AddReply";
import EditMode from "./EditMode";


const EachComment: FC<EachComment_Interface> = ({ theComments, setComments, commentIndex, username, thisComment }) => {

    const [isReplyClicked, setReplyClicked] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [keeptrackofReplyID, setKeeptrackofReplyID] = useState(10)


    const replyClicked = (e: boolean) => {
        setReplyClicked(e)
    }

    const closeReplyBox = () => {
        setReplyClicked(false)
        setKeeptrackofReplyID(keeptrackofReplyID + 1)
    }

    const EditClicked = (e: string) => {
        setEditMode(true)

    }


    const closeEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>

            <div className="each-comment-container">

                {/* scorebox on large screen */}
                <div className="score-box-container">
                    <ScoreBox
                        theComments={theComments}
                        setComments={setComments}
                        commentIndex={commentIndex}
                        replyId={-1}
                        type={"comment"}
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
                    <div className="comment-options-only-display-on-smallscreen">

                        {username !== "juliusomo"
                            &&
                            <ReplyButton onClickReply={replyClicked} />
                        }

                        {username == "juliusomo"
                            &&
                            <div className="delete-and-edit-container">

                                <DeleteButton
                                    theComments={theComments}
                                    setComments={setComments}
                                    commentID={thisComment.id} />

                                <EditButton onClick={EditClicked} />

                            </div>
                        }

                    </div>
                </div>


                <div className="comment-header-and-content">

                    <div className="comment-header">

                        <UserImage image={thisComment.user.image.png} size={1} />

                        <Username username={thisComment.user.username} />

                        <CreatedAt createdAt={thisComment.createdAt} />

                        {/* here it checks weather current user is the one who write this comment or not
                        if yes it displays edit and delete button if no it displays reply button  */}
                        <div className="comment-options">

                            {username !== "juliusomo"
                                &&
                                <ReplyButton onClickReply={replyClicked} />
                            }

                            {username == "juliusomo"
                                &&
                                <div className="delete-and-edit-container">

                                    <DeleteButton
                                        theComments={theComments}
                                        setComments={setComments}
                                        commentID={thisComment.id} />

                                    <EditButton onClick={EditClicked} />

                                </div>
                            }
                        </div>

                    </div>

                    {/* onEdit button clicked it display a box for user to edit his/her comment
                    if not it just display the content of the comment */}
                    {
                        !isEditMode &&
                        <Content content={thisComment.content} />
                    }
                    {
                        isEditMode &&
                        <EditMode
                            theComments={theComments}
                            thisComment={thisComment}
                            setComments={setComments}
                            closeEditMode={closeEditMode}
                        />

                    }

                </div>


            </div>

            {/* on reply button click a new box with text area appears */}
            {
                isReplyClicked &&
                <AddReply
                    theComments={theComments}
                    setComments={setComments}
                    replyingtoUsername={thisComment.user.username}
                    replyingtoid={thisComment.id}
                    closeReplyBox={closeReplyBox}
                    useThisId={keeptrackofReplyID}
                />
            }

            {/* each comment might have some replies, here each reply goes to a component */}
            <div className="replies-container" >
                {theComments[commentIndex].replies.length > 0
                    &&
                    theComments[commentIndex].replies.map((reply, index) => {

                        return (
                            <Replies
                                theComments={theComments}
                                setComments={setComments}
                                reply={reply}
                                commentIndex={commentIndex}
                                key={index}
                                thiscommentId={thisComment.id}
                            />
                        )
                    })


                }
            </div>
        </div >
    )

}


export default EachComment;