import { scorebox_calculate_main_comment_Interface } from "./interfaces";
import { scorebox_calculate_reply_comment_Interface } from "./interfaces";

//e's value is either "plus" or "minus"
export const scorebox_calculate_main_comment: scorebox_calculate_main_comment_Interface = function (theComments, commentId, e, setComments) {

    let arr = [...theComments];

    if (e === "plus")
        arr[commentId].score = arr[commentId].score + 1;

    else
        arr[commentId].score = arr[commentId].score - 1;

    setComments(arr);



}


export const scorebox_calculate_reply_comment: scorebox_calculate_reply_comment_Interface = function (theComments, commentId, replyId, e, setComments) {

    let plus = [...theComments];

    plus[commentId].replies.map((item: any, index: any) => {
        if (item.id === replyId) {
            if (e === "plus")
                plus[commentId].replies[index].score = plus[commentId].replies[index].score + 1
            else
                plus[commentId].replies[index].score = plus[commentId].replies[index].score - 1
            setComments(plus)
        }
    })
}