import NavbarHome from "./NavbarHome";

const NavbarController = (props) => {
  return (
    props.type === 1 ? <NavbarHome/> : ""
  )
}

export default NavbarController;