import AuthWindow from "@/components/AuthWindow";
import NavbarAuth from "@/components/NavbarAuth";
import Link from "next/link";



export default function Auth() {
    return (
        <>
        <Link href="/">
            <NavbarAuth />
        </Link>
        <AuthWindow />
        </>
    )
}