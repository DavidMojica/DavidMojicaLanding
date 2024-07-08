import React from "react";

interface TextProps{
    text:string,
    size:string
    mdsize?:string
}

class Texts{
    constructor() {}

    public static UnderlinedTitle({text, size, mdsize}:TextProps):React.JSX.Element{
        return(
            <p className={`className='text-primary dark:text-white ${size} md:${mdsize} font-bolder underline decoration-tertiary dark:decoration-primary`}>
                {text}
            </p>
        )
    }
}

export default Texts;