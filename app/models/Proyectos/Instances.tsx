import Proyecto from "./Proyecto";

const ProyectoDucaplast = new Proyecto('Ducaplast Ecommerce',
    <>
        Ducaplast Ecommerce es una aplicación web de uso privado diseñada para optimizar el proceso de venta de los productos de la empresa, así como el proceso de empaquetamiento, facturación, despacho y entrega de los diversos pedidos. 
        <br /><br />
        Esta aplicación también segmenta los empleados por roles, por lo que los empleados pueden ver, manipular y completar diferentes procesos y etapas del pedido de acuerdo con sus responsabilidades en la empresa. Además, la aplicación también permite una administración eficiente de usuarios, clientes y productos desde un pánel muy cómodo e intuitivo. 
        <br />
        A futuro se le implementará un módulo de estadísticas y de análisis de datos para mejorar la toma de decisiones basada en información precisa y en tiempo real. 
        <br /><br />
        Los impactos finales de esta aplicación fueron muy positivos. Con su despliegue se logró una reducción muy significativa em el uso de papel gracias a la digitalización de las facturas, se logró un control total de la gestión de cada pedido a través de diversos historiales, lo que permitió un seguimiento detallado y preciso. Asímismo, se ahorró mucho tiempo entre el proceso de venta y despacho del pedido, aumentando la productividad de esta empresa.
    </>,
    'DJANGO, Bootstrap 5, Jinja 2, MVC, OOP, ORM, Css, JavaScript, JQuery, RENDER, PostgreSQL',
    '06/24', '/previews/ducaplast.png', {available:true, URL:'https://ducaplast.com.co/'}, 
    {available:true, URL:'https://github.com/DavidMojica/ducaplast-ecommerce'}
);

const ProyectoSaludMental = new Proyecto('Salud Mental',
    <>
        Proyecto salud mental es una aplicacion web de uso interno que está próxima a desplegarse en algunos hospitales de la ciudad de Bello, Antioquia. 
        <br />
        Su objetivo principal es recopilar los datos de las llamadas de los usuarios que requieren atención psicológica, así como de las citas psicológicas presenciales. Esta herramienta crea un historial detallado de pacientes y sus síntomas con la finalidad de prestar servicios más personalizados, eficientes y mejorar la capacidad para prevenir ciertos síntomas de manera más precisa. 
        <br /><br />
        A futuro, se implementará un módulo de análisis de datos y Big Data dentro de la aplicación. Este módulo buscará patrones, correlaciones y otras estadísticas en las diversas poblaciones atendidas en la ciudad de Bello lo cual permitirá una mejor comprensión de las necesidades y tendencias en salud mental, así como mejorar las estrategias de intervención. 
        <br /><br />
        Este programa segmenta a sus usuarios por roles, cada tipo de usuario tiene sus responsabilidades en la plataforma. Posee un panel de administración de usuarios y de pacientes. Se desplegará de forma local en una red de ordenadores limitada a los hospitales que requieran el software, por ende este software en su despliegue no está abierto al público.
    </>,
    'DJANGO, Bootstrap 5, Jinja 2, MVC, OOP, ORM, Css, JavaScript, Openpyxl, Reportlab, PostgreSQL',
    '11/23', '/previews/saludmental.jpeg', {available:false, URL:undefined}, {available:true, URL:'https://github.com/DavidMojica/T3'}
);

const ProyectoArriendofinca = new Proyecto('Arriendofinca.com',
    <>
        Plataforma inmobiliaria abierta que permite a los usuarios, tanto particulares como agentes inmobiliarios publicar anuncios detallados de sus propiedes, incluyendo las características claves como fotos, ubicación, tamaño, precio, descripción, habitaciones y otros aspectos. 
        <br /><br />
        La finalidad de esta plataforma es crear un mercado accesible que permite a los usuarios interesados en comprar o alquilar propiedades encontrarlas facilmente según sus necesidades y preferencias. 
        <br /><br />
        Esta aplicación posee diversos páneles de control para las propiedades e información personal para facilitar la publicación de inmuebles.
    </>,
    'DJANGO, Bootstrap 5, Jinja 2, MVC, OOP, ORM, Css, JavaScript, PostgreSQL, Raspberry PI, API',
    '05/24', '/previews/arriendofinca.png', {available:false, URL:undefined}, {available:true, URL:'https://github.com/DavidMojica/arriendofinca-II'}
);

const ProyectoDavidaStore = new Proyecto('Davida Store',
    <>
        'Landing page de tienda online de artículos varios. Contiene una página de landing y un catálogo de productos. 
    </>,
    'NextJS, Tailwind, Vercel',
    '06/24', '/previews/davidastore.png', {available:true, URL: 'https://www.davidastore.com/'}, {available:true, URL:'https://github.com/DavidMojica/davida-store'}
);

const ProyectoSkyHub = new Proyecto('SkyHub',
    <> 
        Aplicación web que muestra información útil sobre los objetos celestes, se comsumen diversas API como fuentes de información, como por ejemplo la API de la Nasa, para mayor precisión de los datos.
    </>,
    'NextJS, Tailwind, API de la Nasa, Solar System OpenData API, People In The Space API',
    '04/24', '/previews/skyhub.png', {available:true, URL:'https://skyhub2.vercel.app/'}, {available:true, URL:'https://github.com/DavidMojica/SkyHub'}
)

const ProyectoAstroid = new Proyecto ('Astroid',
    <>
        Aplicación móvil que muestra información útil sobre los objetos celestes, se comsumen diversas API como fuentes de información, como por ejemplo la API de la Nasa, para mayor precisión de los datos. 
    </>,
    'Java, MaterialDesign, API de la Nasa, Solar System OpenData API, People In The Space API',
    '04/24', '/previews/astroid.png', {available:false, URL:undefined}, {available:true, URL:'https://github.com/DavidMojica/Astroid'} 
)

const ProyectosPrincipales:Proyecto[] = [
    ProyectoDucaplast,
    ProyectoSaludMental,
    ProyectoArriendofinca,
    ProyectoDavidaStore,
    ProyectoSkyHub,
    ProyectoAstroid,
];

export default ProyectosPrincipales;