import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const public_hcaptcha_sitekey = "d55018e4-c164-4cfa-b3ce-38d4ed7e53e8";

const HCaptchaWidget = (theme:string) =>{
    return (
        <HCaptcha sitekey={public_hcaptcha_sitekey} theme={'contrast'} ></HCaptcha>
    )
}

export default HCaptchaWidget;