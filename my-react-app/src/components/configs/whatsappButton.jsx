import whatsImage from "../../assets/whatsapp.svg"
import { ButtontWhats } from "./style";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <ButtontWhats onClick={handleClick}> <img src={whatsImage} alt="Entre em contato" /> </ButtontWhats>
  );
};

export default WhatsAppButton;