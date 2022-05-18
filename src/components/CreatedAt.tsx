import { FC } from "react";


interface Comment_time {
    createdAt: string
}

const CreatedAt: FC<Comment_time> = ({createdAt}) => {
    return(
        <p id="createdAt" >
            {createdAt}
        </p>
    )
}

export default CreatedAt;