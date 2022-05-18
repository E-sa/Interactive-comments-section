import { FC } from "react";


interface name {
    username: string
}

const Username: FC<name> = ({ username }) => {

    return (
       <p className="username" >{username} </p>
    )

}


export default Username;