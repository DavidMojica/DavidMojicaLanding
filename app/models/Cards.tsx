import React from "react";
import Texts from "./Text";
import Buttons from "./Buttons";
import Link from "next/link";

interface CardProps{
    title:string,
    message:string,
    size:string,
    level?:number,
    buttonMsg?:string | null,
    buttonRoute?:string,

}

type ExperienceLevel = {
    [key:number]:string;
}

class Cards{
    private static LevelMap:ExperienceLevel = {
        0:'NEW',
        1:'JUNIOR',
        2:'MID',
        3:'SENIOR',
        4:'#',
        5:'CORREO',
        6: 'DETALLES'
    };

    constructor(){}

    public static SimpleCard({title, message, size, buttonMsg=null, buttonRoute=''}:CardProps):React.JSX.Element{
        return(
            <article className={`shadow-xl dark:shadow-md dark:shadow-gray-500 p-10 rounded-xl ${size}`}>
                <h3><Texts.UnderlinedTitle text={title} size="text-3xl" /></h3>
                <p className="md:text-xl mt-6 text-secondary dark:text-white overflow-hidden">
                    {message}
                </p>
                {buttonMsg &&  
                    <Link href={buttonRoute}>
                        <Buttons.PrimaryButton text={buttonMsg} margin="mt-4" />
                    </Link> 
                }
            </article>
        )
    }

    public static ExperienceCard({title, message, size, level=0}:CardProps):React.JSX.Element{
        return(
            <article className={`p-6 bg-white dark:bg-bgdark shadow-md dark:shadow-gray-500 rounded-xl ${size} relative overflow-hidden`}>
                <span className="absolute top-0  right-0 uppercase font-bolder text-8xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tighter text-muted dark:text-bgdarkless z-10">{Cards.LevelMap[level]}</span>
                <div className="relative  z-20">
                    <h2 className="text-3xl text-primary dark:text-white font-bolder">{title}</h2>
                    <p className="text-secondary dark:text-white text-nowrap">{message}</p>
                </div>
            </article>
        )
    }
}

export default Cards;