import React, {useState, ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import Hcaptcha from '@hcaptcha/react-hcaptcha';
import { Alert } from 'flowbite-react';
import emailjs from 'emailjs-com';

import ErrorList from '../Errors';

import { HiInformationCircle } from 'react-icons/hi';
import { IoWarningSharp } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { BsCheckCircle } from 'react-icons/bs';

//*-----Variables-----*//
const public_hcaptcha_sitekey = "d55018e4-c164-4cfa-b3ce-38d4ed7e53e8";
const emailjsService = "service_hbq0zvy";
const emailjsTemplate = "template_xsmnogt";
const publicEmailJs= "Js1QOLa0Zy7MBuzl9";
let FormAlreadySent:boolean = false;


interface FormData {
    name:string;
    email:string;
    message:string;
}

interface EventMapProps {
    [key:number] : {classname:string, icon:IconType}
}

const EventMap: EventMapProps = {
    0: {classname: 'failure', icon: HiInformationCircle},
    1: {classname: 'warning', icon: IoWarningSharp},
    2: {classname: 'success', icon: BsCheckCircle}
}
   
const FormContactMe:React.FC = () =>{
    const initialFormData: FormData = {
        name: '',
        email: '',
        message: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [event, setEvent] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<number | null>(null);

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev)=> ({ ...prev, [name]: value }));
    }

    const handleCaptchaVerify = (token:string) => {
        setCaptchaToken(token);
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        //*------Validaciones clientside-------*//
        if(!formData.name || !formData.message || !formData.email){
            setEvent(ErrorList.AllDataIsRequired);
            setShowAlert(0);
            return;
        }

        if(!captchaToken) {
            setEvent(ErrorList.CaptchaRequired);
            setShowAlert(0);
            return;
        }        

        if(FormAlreadySent) {
            setEvent(ErrorList.AntiSpamBotProtection);
            setShowAlert(1);
            return;
        }        

        emailjs.sendForm(emailjsService, emailjsTemplate, e.target , publicEmailJs ).then((success)=>{
            setShowAlert(2);
            setEvent('Enviado con exito');
            setFormData(initialFormData);
            FormAlreadySent = true;
        }).catch((err)=>{    
            setEvent(ErrorList.CaptchaRequired);
            setShowAlert(0);
            return;
        });
        

        
    };

    useEffect(() => {
        let timeout:NodeJS.Timeout;
        if (showAlert != null){
            timeout = setTimeout(() => {
                setShowAlert(null);
            },4000);
        }
        return () => clearTimeout(timeout);
    }, [showAlert]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre *"
                className="w-full pt-6 border-0 border-b bg-transparent text-xl dark:text-white dark:placeholder:text-white focus:outline-none focus:ring-0 focus:border-b focus:border-gray-300 duration-300 ease-out"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full pt-6 border-0 border-b bg-transparent text-xl dark:text-white dark:placeholder:text-white focus:outline-none focus:ring-0 focus:border-b focus:border-gray-300 duration-300 ease-out"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                id="message"
                placeholder="Mensaje *"
                className="w-full pt-6 border-0 border-b bg-transparent text-xl dark:text-white dark:placeholder:text-white focus:outline-none focus:ring-0 focus:border-b focus:border-gray-300 duration-300 ease-out"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <article className="mt-6">
                <Hcaptcha
                sitekey={public_hcaptcha_sitekey}
                theme={'light'}
                onVerify={handleCaptchaVerify}
                > 
                </Hcaptcha>
            </article>
            {showAlert != null && <Alert color={EventMap[showAlert].classname} className='mt-6' icon={EventMap[showAlert].icon} withBorderAccent >
                {event}</Alert>}
            <button type="submit"
                className="mt-6 py-2 px-12 uppercase font-bold dark:text-white rounded-3xl border border-black dark:border-white border-solid dark:hover:bg-white dark:hover:text-primary hover:bg-primary hover:text-white duration-300 text-xl tracking-wider">
                Enviar
            </button>
        </form>
    )
}

export default FormContactMe;