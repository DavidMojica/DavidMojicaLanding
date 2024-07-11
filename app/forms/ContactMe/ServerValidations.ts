import type { NextApiRequest, NextApiResponse } from "next";
import ErrorList from "../Errors";

interface FormData {
    name: string;
    email: string;
    message: string;
    captchaToken: string;
}

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method !== 'POST'){
        res.status(405).json({message: ErrorList.MethodNotAllowed});
        return;
    }

    const {name, email, message, captchaToken }: FormData = req.body;

    /*--Server Validations--*/
    if(!name || !email || !message || !captchaToken) {
        res.status(400).json({message: ErrorList.AllDataIsRequired});
        return;
    }

    res.status(200).json({ message: 'Formulario enviado con éxito.'})
}