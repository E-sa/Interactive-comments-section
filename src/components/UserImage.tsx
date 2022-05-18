import { FC } from "react";


interface avatar {
    image: string;
    size: number;
}

const UserImage: FC<avatar> = ({ image, size }) => {


    const avatar = require(`${image}`)

    return (
        <>
            {

                size === 1 &&

                <img className="user-image-size1" src={avatar} />
            }
            {

                size === 2 &&
                <img className="user-image-size2" src={avatar} />
            }
        </>


    )

}


export default UserImage;