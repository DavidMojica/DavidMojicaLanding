import React from "react";
import Texts from "./Text";

interface SimpleCardProps{
    title:string,
    message:string,
    size:string,
}

class Cards{
    constructor(){}

    public static SimpleCard({title, message, size}:SimpleCardProps):React.JSX.Element{
        return(
            <article className={`shadow-xl dark:shadow-md dark:shadow-white p-10 rounded-xl ${size}`}>
                <h3><Texts.UnderlinedTitle text={title} size="text-3xl" /></h3>
                <p className="text-xl mt-6 text-secondary overflow-hidden">
                    {message}
                </p>
            </article>
        )
    }
}

export default Cards;