import { FC } from "react";
import { ScoreBox_Interface } from "./interfaces"
import { ReactComponent as Plus_Icon } from "./images/icon-plus.svg";
import { ReactComponent as Minus_Icon } from "./images/icon-minus.svg";
import { scorebox_calculate_main_comment } from './ScoreBox_Calculator'
import { scorebox_calculate_reply_comment } from './ScoreBox_Calculator'


const ScoreBox: FC<ScoreBox_Interface> = ({ theComments, setComments, commentIndex, replyId, type, score }) => {

    return (

        <>
            {
                type === "comment"
                &&

                <>
                    <Plus_Icon
                        className="scoreBox_hover"
                        onClick={
                            () => scorebox_calculate_main_comment(theComments = theComments, commentIndex = commentIndex, "plus", setComments = setComments)
                        }
                    />


                    <p className="score-p">
                        {theComments[commentIndex].score}
                    </p>


                    <Minus_Icon
                        className="scoreBox_hover"
                        onClick={
                            () => scorebox_calculate_main_comment
                                (
                                    theComments = theComments,
                                    commentIndex = commentIndex,
                                    "minus",
                                    setComments = setComments
                                )
                        }
                    />

                </>
            }

            {
                type === "reply"
                &&
                <>
                    <Plus_Icon
                        className="scoreBox_hover"
                        onClick={
                            () => scorebox_calculate_reply_comment
                                (theComments, commentIndex, replyId, "plus", setComments)
                        }
                    />

                    <p className="score-p">{score}</p>

                    <Minus_Icon
                        className="scoreBox_hover"
                        onClick={
                            () => scorebox_calculate_reply_comment
                                (theComments, commentIndex, replyId, "minus", setComments
                                )
                        }
                    />

                </>
            }
        </>

    )
}

export default ScoreBox;