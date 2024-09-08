import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function SocialIcons({ icon }: { icon: string }) {
    switch (icon) {
        case 'Facebook':
            return <FaFacebook/>;
            
        case 'Instagram':
            return <FaInstagram/>;
        case 'WhatsApp':
            return <FaWhatsapp/>;
        case 'Email':
            return <MdEmail/>;

        default:
            return <p>batata</p>;
    }
}
