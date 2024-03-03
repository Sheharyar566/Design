import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <header className="grid w-full grid-cols-2 justify-between px-10 py-10 md:grid-cols-3 md:px-20">
      <Link id="logo" href="/" className="text-xl md:text-3xl">
        Hikers&apos; Guild
      </Link>

      <nav className="flex flex-row items-center justify-center gap-5">
        <Link href="/equipment">Equipment</Link>
        <Link href="/equipment">About Us</Link>
        <Link href="/equipment">Blog</Link>
      </nav>

      <button
        id="accountButton"
        className="flex flex-row items-center justify-end gap-2 font-bold"
      >
        <CgProfile />
        Account
      </button>
    </header>
  );
};

export default Navbar;
