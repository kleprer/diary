import Description from "@/components/Description";
import NavbarHome from "@/components/NavbarHome";
import NavbarHomeLogged from "@/components/NavbarHomeLogged";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  let isLoggedIn = true;

  return (
    <>
      {isLoggedIn == true ? 
      <Link href="/auth">
        <NavbarHome />
      </Link>
      : <NavbarHomeLogged />}
      
      <Description />
      <Image className="position: absolute top-0 h-full w-auto xl:w-1/2" 
      src="/Mask group.png" 
      alt="хомяк" width={1162} height={1000} 
      priority={true}/>
      
    </>

  );
}
