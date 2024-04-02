import NavbarAuth from "@/components/NavbarAuth";
import Link from "next/link";
import PG from "@/components/PG";

export default function Calendar() {
    return(
        <>
            <Link href="/">
                <NavbarAuth />
            </Link>
            <PG />
            </>
    )

}