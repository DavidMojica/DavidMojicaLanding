import { Metadata } from "next";
import PageClient from "./page.client";

export const metadata:Metadata = {
    title: "Contacto",
    description: "Desarrollo de software a la medida, herramientas de desarrollo, frameworks, Proyectos, beneficios.",
    openGraph:{
        title: 'Contacto',
        description: "Desarrollo de software a la medida, herramientas de desarrollo, frameworks, servicios, beneficios.",
        url: 'https://www.davidmojica.co/services',
        siteName: 'davidmojica',
        images: [{
            url: '/logo_light.jpg',
            width: 1260,
            height: 800
        }],
    }
}

export default function Page() {
    return <PageClient />
}