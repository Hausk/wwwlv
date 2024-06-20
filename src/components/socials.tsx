import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

const socials = [
    { icon: <FaFacebook />, path: "https://m.facebook.com/profile.php?id=100072519471892"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/libre_vivant_photographie/?igshid=YmMyMTA2M2Y%3Dm"},
    { icon: <FaTiktok />, path: "https://www.tiktok.com/@libre_vivant"},
]

export const Socials = ({containerStyles, iconStyles}: {containerStyles: string, iconStyles: string}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> (
            <Link href={item.path} key={index} className={iconStyles + ' text-white/80'} target="_blank">
                {item.icon}
            </Link>
        ))}
    </div>
  )
}
