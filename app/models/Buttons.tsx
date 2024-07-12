import React from "react"

interface ButtonProps{
    text:string,
    margin?:string
}

class Buttons{
    constructor(){}

    public static PrimaryButton({text, margin}:ButtonProps):React.ReactNode{
        return (
            <button className={`${margin} py-2 px-12 uppercase font-bold dark:text-white rounded-3xl border border-black dark:border-white border-solid dark:hover:bg-white dark:hover:text-primary  hover:bg-primary hover:text-white duration-300 text-xl tracking-wider`}>
             <p className="text-wrap">
             {text}
             </p>
            </button>
        )
    }
}

export default Buttons;