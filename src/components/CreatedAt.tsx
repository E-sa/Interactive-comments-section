import { FC } from "react";


interface Comment_time {
    createdAt: string
}

const CreatedAt: FC<Comment_time> = ({createdAt}) => {
    return(
        <p className="createdAt" >
            {createdAt}
        </p>
    )
}

export default CreatedAt;