import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { display: "home", link: "/" },
    { display: "blog", link: "blog" },
    { display: "contact", link: "contact" },
  ];

  return (
    <div>
      <ul className="flex justify-center gap-2 h-8 items-center fixed bottom-2 right-2 bg-white">
        {links.map((link) => {
          return (
            <li key={link.display}>
              <Link href={link.link}>
                <p className="cursor-pointer">{link.display}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
