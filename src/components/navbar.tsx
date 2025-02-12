import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="container">
      <div className="sticky top-8 z-10 flex items-center justify-between rounded-3xl border border-[#197686] bg-[#05252C]/40 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:opacity-50">
            <Image src={logo} alt="ticz" />
          </Link>
        </div>
        <div className="hidden items-center space-x-4 font-jeju sm:flex">
          <Link href="/events" className="p-2 text-gray-300 hover:text-white">
            Events
          </Link>
          <Link
            href="/my-tickets"
            className="p-2 text-gray-300 hover:text-white"
          >
            My Tickets
          </Link>
          <Link href="/about" className="p-2 text-gray-300 hover:text-white">
            About Project
          </Link>
        </div>
        <Button
          variant="outline"
          className="hover rounded-xl px-4 py-5 font-jeju text-[#0A0C11]"
          asChild
        >
          <Link href="/my-tickets">MY TICKETS →</Link>
        </Button>
      </div>
    </nav>
  );
}
