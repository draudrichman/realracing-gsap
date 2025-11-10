import { type FC, type ReactNode } from "react";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

// Define an interface for the shape of a social link object
interface SocialLink {
    href: string;
    icon: ReactNode; // ReactNode can be a JSX element, string, or number
}

// Explicitly type the socialLinks array
const socialLinks: SocialLink[] = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
];

// Type the functional component using FC (Functional Component)
const Footer: FC = () => {
    return (
        <footer className="w-screen bg-[#000] py-4 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Prima Corsa 2025. All rights reserved
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition-colors duration-500 ease-in-out hover:text-[#5542ff]"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;