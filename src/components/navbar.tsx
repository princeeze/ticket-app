import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="mx-28 border rounded-3xl backdrop-blur-sm border-[#197686] bg-[#05252C]/40">
      <div className="container mx-auto flex py-3 items-center justify-between px-4">
        <div className="flex  items-center space-x-4">
          <Link href="/" className="hover:opacity-50">
            <Image src={logo} alt="ticz" />
          </Link>
        </div>
        <div className="flex font-jeju items-center space-x-4">
          <Link href="/events" className="text-gray-300 hover:text-white p-2">
            Events
          </Link>
          <Link
            href="/my-tickets"
            className="text-gray-300 hover:text-white p-2"
          >
            My Tickets
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white p-2">
            About Project
          </Link>
        </div>
        <Button
          variant="outline"
          className="text-[#0A0C11] hover font-jeju rounded-xl px-4 py-6"
          asChild
        >
          <Link href="/my-tickets">MY TICKETS →</Link>
        </Button>
      </div>
    </nav>
  );
}
