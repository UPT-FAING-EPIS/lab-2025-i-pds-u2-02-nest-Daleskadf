import { Customer } from "./customer";

export class EmailService {
    public SendRegistrationEmail(customer: Customer): boolean
    {
        // En un proyecto real, aquí iría la lógica para enviar el email.
        // Para este laboratorio, simplemente simulamos que se envió con éxito.
        console.log(`Sending registration email to ${customer.Email}`);
        return true;
    }         
}