

export interface CommentsType {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
        image: {
            png: string;
            webp: string;
        },
        username: string;
    }
    replies: {
        id: number;
        content: string;
        createdAt: string;
        score: number;
        replyingTo: string;
        user: {
            image: {
                png: string;
                webp: string;
            },
            username: string;
        }
    }[]


}

export interface EachComment_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    commentIndex: number;
    username: string;

    thisComment: CommentsType
}

export interface ScoreBox_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    commentIndex: number;
    type: string;
    replyId: number;
    score?: number;

}


export interface Reply_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    commentIndex: number;


    reply: {

        id: number;
        content: string;
        createdAt: string;
        score: number;
        replyingTo: string;
        user: {
            image: {
                png: string;
                webp: string;
            };
            username: string;
        };

    }

    thiscommentId: number;
}


export interface scorebox_calculate_main_comment_Interface {
    (theComments: CommentsType[],
        commentId: number,
        e: string,
        setComments: (eachComment: any) => void): void;

}

export interface scorebox_calculate_reply_comment_Interface {
    (
        theComments: CommentsType[],
        commentId: number,
        replyId: number,
        e: string,
        setComments: (eachComment: any) => void
    ): void;

}



export interface AddComment_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    currentUser: {
        image: {
            png: string;
            webp: string;
        },
        username: string;
    }
    // type: string;
    // thiscommentId?: number;
    // replyingtoid?: number;
    // closeReplyBox:( () => void);
    // replyingtoUsername: string;
}


export interface AddReply_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    replyingtoUsername: string;
    replyingtoid: Number;
    closeReplyBox: () => void;
    useThisId: number;
}

export interface Delete_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    commentID: number;
}

export interface Delete_Reply_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    commentID: number;
    replyID: Number;

}

export interface Edit_Interface {
    // theComments: CommentsType[];
    // setComments: (eachComment: any) => void;
    // commentID:  number;
    onClick: (e: string) => void


}

export interface EditMode_Interface {
    theComments: CommentsType[];
    setComments: (eachComment: any) => void;
    thisComment: any;
    closeEditMode: () => void;

    thisReply?: {

        id: number;
        content: string;
        createdAt: string;
        score: number;
        replyingTo: string;
        user: {
            image: {
                png: string;
                webp: string;
            };
            username: string;
        };

    }

}