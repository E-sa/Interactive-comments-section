//if user clicks <<Delete comment/reply icon>> this component renders and asks for confirmation 
import { FC } from "react";

interface myInterface {
    response: (e: boolean) => void
}

const DeleteWarning: FC<myInterface> = ({ response }) => {



    return (

        <div className="delete-massage-container-parent">

            <div className="delete-massage-container">

                <h3
                    className="m-0" >
                    Delete comment
                </h3>

                <p
                    className="delete-massage-text" >
                    Are you sure you want to delete this comment? This will remove the comment and can't be undone
                </p>

                <div className="delete-massage-buttons-container">

                    <button
                        className="delete-massage-buttons-grey"
                        onClick={() => response(false)}>
                        No, Cancel
                    </button>

                    <button
                        className="delete-massage-buttons-red"
                        onClick={() => response(true)} >
                        Yes, Delete
                    </button>

                </div>
            </div>
        </div>

    )

}


export default DeleteWarning;