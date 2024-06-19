'use client'

import { useEffect, useState } from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronLeft, ChevronRightIcon, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { format } from "date-fns";
import { fr } from 'date-fns/locale';

const links = [
    {
        name: 'accueil',
        path: '/'
    },
    {
        name: 'photobox',
        path: '/works'
    }
];

export const MobileNav = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => {
        setIsOpen(!isOpen);
    };
    const closeSheet = () => {
        setIsOpen(false);
    };
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
            const formattedTime = format(parisTime, 'HH:mm', { locale: fr });
            setCurrentTime(formattedTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Sheet open={isOpen} onOpenChange={toggleSheet}>
            <SheetTrigger asChild>
                <button onClick={toggleSheet} className="flex justify-center items-center">
                    {isOpen ? 
                        <SheetClose className="z-30">
                            <X className="text-[32px] text-accent" />
                        </SheetClose> : 
                        <Menu className="text-[32px] text-accent" />}
                </button>
            </SheetTrigger>
            <SheetContent className="bg-primary h-[calc(100%-4rem)] top-16 p-0 flex justify-between flex-col z-10" side={'top'}>
                <div className='flex flex-col gap-8 h-full justify-center m-auto'>
                    {links.map((link, index) => (
                        <Link href={link.path} key={index} className="text-5xl mx-auto capitalize flex items-center duration-300" onClick={closeSheet}>
                            <ChevronRightIcon strokeWidth={"3"} className={`
                                ${link.path == pathName && "text-accent"}
                                ${link.path != pathName && "text-transparent"}`}
                            />
                                <span className="mx-4">{link.name}</span>
                            <ChevronLeft strokeWidth={"3"} className={`
                                ${link.path == pathName && "text-accent"}
                                ${link.path != pathName && "text-transparent"}`}
                            />
                        </Link>
                    ))}
                </div>
                <div className="">
                    <div className="flex items-center justify-between px-10 mb-5">
                        <div className="leading-[1.5]">
                            <p>Version</p>
                            <p>0.1</p>
                        </div>
                        <div className="leading-[1.5] text-right">
                            <p>Heure</p>
                            <p>{currentTime}</p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}