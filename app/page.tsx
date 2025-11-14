import { Metadata } from "next";
import HomeClient from "./page.client";

export const metadata:Metadata = {
  title:"Inicio",
  description:"Desarrollo de software a la medida, paginas web, aplicaciones, programas, análisis de datos y más.",
  openGraph: {
    title: 'Inicio',
    description:"Desarrollo de software a la medida, paginas web, aplicaciones, programas, análisis de datos y más.",
    url: 'https://www.davidmojica.co',
    siteName: 'davidmojica',
    images: [{
        url: '/logo_light.jpg',
        width: 1260,
        height: 800
    }],
  }
}
export default function Page() {
    return <HomeClient />
}