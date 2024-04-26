import { ButtontGmail } from "./style";

const EmailLink = ({ email, subject, body, children }) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    return (
      <ButtontGmail href={mailtoLink}>{children}</ButtontGmail>
    );
  };
  
  export default EmailLink;