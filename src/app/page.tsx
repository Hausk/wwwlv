"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Photo } from "@/components/photo";
import { Socials } from "@/components/socials";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/word-rotate";
import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let startY = 0; // Position de départ du toucher sur mobile

    // Fonction pour gérer le scroll à la molette (pour bureau)
    const handleWheelScroll = (event: any) => {
      if (event.deltaY > 100) {
        router.push("/photobox");
      }
    };

    // Fonction pour gérer les événements tactiles sur mobile
    const handleTouchStart = (event: any) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: any) => {
      const currentY = event.touches[0].clientY;
      if (startY - currentY > 100) {
        router.push("/photobox");
      }
    };

    // Ajouter les événements
    if (typeof window !== "undefined") {
      window.addEventListener("wheel", handleWheelScroll); // Bureau
      window.addEventListener("touchstart", handleTouchStart); // Mobile
      window.addEventListener("touchmove", handleTouchMove); // Mobile
    }

    // Nettoyer les événements à la désactivation du composant
    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [router]);

  return (
    <section className="h-[calc(100vh-4rem)] flex">
      <div className="w-[80%] m-auto h-fit">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl bg-accent text-black px-5 py-2 border-accent rounded-md hidden xl:block w-fit">
              Photographe
            </span>
            <WordRotate
              words={["Bonjour je suis", "Hello, I'm", "Olá, sou a"]}
              duration={5000}
              className="text-4xl xl:h1"
            />
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              Photographe passionnée par la création de souvenirs heureux et
              émotionnels à travers mes photos. Je suis là pour immortaliser vos
              moments spéciaux et les rendre encore plus mémorables
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 bg-primary border border-accent text-accent text-base hover:bg-accent hover:text-primary"
              >
                <Link
                  href={"mailto:victoriadossantos92190@gmail.com"}
                  className="text-white/80"
                >
                  Me contacter
                  <MailIcon className="text-xl my-auto align-middle" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
