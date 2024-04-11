import Description from "/components/Description";
import NavbarHome from "/components/NavbarHome";
import NavbarHomeLogged from "/components/NavbarHomeLogged";

export default function Home() {

  let isLoggedIn = false;

  return (
    <>
      {isLoggedIn == false ? 
      <NavbarHome />
      : <NavbarHomeLogged />}
      
      <Description />
      <Image className="position: absolute top-0 h-full w-auto xl:w-1/2" 
      src="/Mask group.png" 
      alt="хомяк" width={1162} height={1000} 
      priority={true}/>
      
    </>

  );
}
