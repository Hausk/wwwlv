import Link from "next/link"
import { Navbar } from "./navbar"
import { MobileNav } from "./mobile-navbar"

export const Header = () => {
  return (
    <header className="fixed top-0 w-screen py-4 text-white z-30 bg-primary">
        <div className="mx-auto flex justify-between items-center px-10 lg:px-0 lg:w-[80%]">
            <Link href="/">
                <h1 className="text-2xl md:text-4xl font-semibold group hover:text-accent duration-200">
                    Libre&nbsp;<span className="text-accent group-hover:text-white">&amp;</span>&nbsp;Vivant<span className="text-accent group-hover:text-white">.</span>
                </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
            </div>
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}
