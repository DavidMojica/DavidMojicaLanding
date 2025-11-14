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
    private ImgURLs:string[]; 
    private Preview:AvailableAndUrl;
    private SourceCode:AvailableAndUrl;
    private Downloadeable:AvailableAndUrl;

    constructor (
        id:number,
        name:string, 
        description:React.JSX.Element, 
        madeWith:string, 
        date:string, 
        imgUrls:string[], 
        preview:AvailableAndUrl, 
        sourceCode:AvailableAndUrl, 
        downloadeable:AvailableAndUrl={available:false, URL:undefined}
    ){
        this.id = id;
        this.Name = name;
        this.Description = description;
        this.MadeWith = madeWith;
        this.Date=date;
        this.ImgURLs = imgUrls;
        this.Preview = preview;
        this.SourceCode = sourceCode;
        this.Downloadeable = downloadeable;
    }

    get getName():string{
        return this.Name;
    }

    get getDescription():React.JSX.Element{
        return this.Description;
    }

    get getMadeWith():string{
        return this.MadeWith;
    }

    get getDate():string{
        return this.Date;
    }

    get getImages():string[]{
        return this.ImgURLs;
    }

    get getImage():string{
        return this.ImgURLs[0]; 
    }

    get checkPreview():boolean{
        return this.Preview.available;
    }

    get getPreview():string | undefined{
        if (this.Preview.available) return this.Preview.URL;
        return undefined;
    }

    get checkSourceCode():boolean{
        return this.SourceCode.available;
    }

    get getSourceCode():string | undefined{
        if (this.SourceCode.available) return this.SourceCode.URL;
        return undefined;
    }

    get checkDownlodeable():boolean{
        return this.Downloadeable.available;
    }

    get getDownloadLink(): string | undefined{
        if (this.Downloadeable.available) return this.Downloadeable.URL;
        return undefined;
    }
}

export default Proyecto;