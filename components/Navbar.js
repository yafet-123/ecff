import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const NavLinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "PROJECTS", path: "/" },
    { title: "PUBLICATIONS", path: "/" },
    { title: "PARTNERS", path: "/" },
    { title: "CONTACT US", path: "/" },
  ];
  return (
    <nav className="w-full fixed bg-transparent left-0 top-0 ease-in duration-100 z-10 mt-5">
      <div className="flex justify-between px-28 md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo-white.svg"
                className=""
                alt=""
                width={100}
                height={35}
              />
            </a>
          </Link>
        </div>

        <div>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NavLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white hover:text-ecffSecondary	hover:underline focus:text-ecffSecondary	focus:underline text-sm "
                >
                  <Link href={link.path}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}