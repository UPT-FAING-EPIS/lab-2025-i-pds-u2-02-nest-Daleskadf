import { Customer } from "./customer";
import { DataAccessLayer } from "./data-access-layer";
import { EmailService } from "./email-service";
import { Validator } from "./validator";

export class CustomerRegistration {
    public RegisterCustomer(customer: Customer): boolean
    {
        // La Fachada esconde toda la complejidad
        // Paso 1: Validar
        const validator = new Validator();
        validator.ValidateCustomer(customer);

        // Paso 2: Guardar
        const customerDataAccessLayer = new DataAccessLayer();
        customerDataAccessLayer.SaveCustomer(customer);
        
        // Paso 3: Enviar email
        const email = new EmailService();
        email.SendRegistrationEmail(customer);
        
        return true;
    }    
}