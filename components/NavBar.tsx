import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { display: "home", link: "/" },
    { display: "blog", link: "blog" },
    { display: "contact", link: "contact" },
  ];

  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 border-y-[2px] border-light">
      <ul className="flex justify-around gap-2 h-12 items-center bg-dark text-light px-4 py-2">
        {links.map((link) => {
          return (
            <li key={link.display}>
              <Link href={link.link}>
                <p className="cursor-pointer flex-1 flex">{link.display}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
