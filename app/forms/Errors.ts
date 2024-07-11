/*-----Errores-----*/
type ErrorProps = {
    [key:PropertyKey]: string;
}

const ErrorList: ErrorProps = {
    AllDataIsRequired: 'Todos los campos son obligatorios.',
    CaptchaRequired: 'Por favor completa el captcha.',
    FormSubmissionError: 'Error al enviar el formulario.',
    CaptchaVerificationFailed: 'Verificación del captcha fallida.',
    MethodNotAllowed: 'Método no permitido.',
    AntiSpamBotProtection: 'Sitio protegido contra bots de spam. Para enviar otro mensaje, recargue la página.',
    SomethingWrong: 'Algo salió mal.',
}

export default ErrorList;