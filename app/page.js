import Description from "@/components/Description";
import NavbarController from "@/components/NavbarController";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <NavbarController type={1} />
      <Description />
      <Image className="position: absolute top-0 h-full w-auto" 
      src="/Mask group.png" 
      alt="хомяк" width={1162} height={1000} 
      priority={true}/>
      
    </>

  );
}
