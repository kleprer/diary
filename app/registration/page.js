import NavbarAuth from "@/components/NavbarAuth";
import RegistrationWindow from "@/components/RegistrationWindow";
import Link from "next/link";

export default function Registration() {
    return (
        <>
            <Link href="/">
                <NavbarAuth />
            </Link>
            <RegistrationWindow />
        </>
    )
}