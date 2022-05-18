import { FC } from "react";
import { useEffect } from "react";

interface myInterface {
    response: (e: boolean) => void
}

const Delete_message: FC<myInterface> = ({ response }) => {



    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    // }, []);


    return (



        <div className="delete-massage-container-parent">
            <div className="delete-massage-container">
                <h3 className="m-0" >Delete comment</h3>
                <p className="delete-massage-text" >Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
                <div className="delete-massage-buttons-container">
                    <button className="delete-massage-buttons-grey" onClick={()=> response(false)}>No, Cancel</button>
                    <button className="delete-massage-buttons-red" onClick={()=> response(true)} > Yes, Delete</button>
                </div>
            </div>
        </div>





    )

}


export default Delete_message;