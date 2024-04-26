
import EmailLink from "../configs/emailButton";
import WhatsAppButton from "../configs/whatsappButton";
import { ContactDiv, ContactSection } from "./styles";
import gmailImage from "../../assets/gmail.svg"


export const Footer = () => {
  return (
    <ContactSection>

      <h1>Entre em contato</h1>

        <ContactDiv>
        
            <WhatsAppButton phoneNumber="5551996618608" message="Olá, estou entrando em contato através do seu site." />
            <EmailLink email="lucascosta120903@gmail.com" subject="Contato via site" body="Boa tarde gostaria de entrar em contato"><img src={gmailImage} alt="" /></EmailLink>
        </ContactDiv>


        
          
        

    </ContactSection>
  );
};