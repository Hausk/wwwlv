import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

const socials = [
    { icon: <FaFacebook />, path: ""},
    { icon: <FaInstagram />, path: ""},
    { icon: <FaTiktok />, path: ""},
]

export const Socials = ({containerStyles, iconStyles}: {containerStyles: string, iconStyles: string}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> (
            <Link href={item.path} key={index} className={iconStyles + ' text-white/80'}>
                {item.icon}
            </Link>
        ))}
    </div>
  )
}
