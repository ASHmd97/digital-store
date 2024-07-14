import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "#" },
  { name: "Explore", href: "#" },
  { name: "Products", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`w-screen h-screen absolute top-0 left-0  md:hidden ${
          isOpen ? "bg-black/50 backdrop-blur-sm" : "hidden"
        }`}></div>

      <div
        className={`flex flex-col md:hidden bg-gray-900 w-[300px] absolute top-0 right-0 z-10 h-[100vh] transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Mobile menu header */}
        <div
          className="rounded-md flex items-center justify-end px-4 py-4 cursor-pointer"
          onClick={() => setIsOpen(false)}>
          <div className="w-[40px] h-[40px] rounded-md bg-gray-800 flex items-center justify-center text-white hover:text-primary transition-all duration-500">
            <p className="text-2xl font-extrabold">X</p>
          </div>
        </div>
        {/* logo */}
        <div className="h-[280px] flex items-center justify-center">
          <Link href="#" className="block px-4 py-2 text-2xl font-bold">
            <Image src="/logo.svg" alt="" width={80} height={80} />
          </Link>
        </div>

        {/* menu */}
        <ul className="flex-1 flex flex-col divide-y divide-gray-700">
          <li className="py-2">
            <ul className="flex flex-col space-y-2">
              {links.map((link) => (
                <li key={link.name} className="">
                  <Link
                    className="block px-4 py-2 text-xl font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="py-2">
            <button
              type="submit"
              className="block w-full px-4 py-2 text-xl font-medium text-primary hover:bg-primary hover:text-white">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
