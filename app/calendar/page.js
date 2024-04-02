import NavbarCalendar from "@/components/NavbarCalendar";
import Link from "next/link";
import PG from "@/components/PG";

export default function Calendar() {
    return(
        <>
            <Link href="/">
                <NavbarCalendar />
            </Link>
            <PG />
            </>
    )

}