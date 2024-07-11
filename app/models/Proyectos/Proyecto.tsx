import React, { Key } from "react";

type AvailableAndUrl = {
    available:boolean,
    URL?:string,
}

class Proyecto {
    public id:Key;
    private Name:string;
    private Description:React.JSX.Element;
    private MadeWith:string;
    private Date:string;
    private ImgURL:string;
    private Preview:AvailableAndUrl;
    private SourceCode:AvailableAndUrl;

    constructor (id:number,name:string, description:React.JSX.Element, madeWith:string, date:string, imgUrl:string, preview:AvailableAndUrl, sourceCode:AvailableAndUrl){
        this.id = id;
        this.Name = name;
        this.Description = description;
        this.MadeWith = madeWith;
        this.Date=date;
        this.ImgURL = imgUrl;
        this.Preview = preview;
        this.SourceCode = sourceCode;
    }

    getName():string{
        return this.Name;
    }

    getDescription():React.JSX.Element{
        return this.Description;
    }

    getMadeWith():string{
        return this.MadeWith;
    }

    getDate():string{
        return this.Date;
    }

    getImage():string{
        return this.ImgURL;
    }

    checkPreview():boolean{
        return this.Preview.available;
    }

    getPreview():string | undefined{
        if (this.Preview.available) return this.Preview.URL;
        return undefined;
    }

    checkSourceCode():boolean{
        return this.SourceCode.available;
    }

    getSourceCode():string | undefined{
        if (this.SourceCode.available) return this.SourceCode.URL;
        return undefined;
    }
}

export default Proyecto;