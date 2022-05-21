//here all comments map to seperate components <<EachComment>>
import { useState } from "react";
import data from "./data.json";
import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { CommentsType } from "./interfaces";

function App() {

    const [theComments, setTheComments] = useState<CommentsType[]>(data.comments);


    return (
        <div className="container" role="main">
            {
                theComments.map((comment, index) => {

                    return (
                        <div key={index}>

                            {/* now every comment is in a seperate component */}
                            <EachComment
                                theComments={theComments}
                                setComments={setTheComments}
                                commentIndex={index}
                                username={comment.user.username}
                                thisComment={comment} />

                        </div>
                    )
                })
            }

            {/* just a box for user to add comment */}
            <AddComment
                currentUser={data.currentUser}
                theComments={theComments}
                setComments={setTheComments} />

        </div>
    )
}
export default App;