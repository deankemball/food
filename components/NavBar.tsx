import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const links = [
    { display: "home", link: "/", hover: "-translate-x-1/3" },
    { display: "blog", link: "/blog", hover: "translate-x-0" },
    { display: "contact", link: "/contact", hover: "translate-x-1/3" },
  ];

  // const path = usePathname();
  // const [xTransform, setXTransform] = useState<string>("");
  // // console.log(path);
  // useEffect(() => {
  //   const x = links.filter((link) => {
  //     return link.link === path;
  //   })[0].hover;
  //   setXTransform(x);
  // }, [path]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t-[2px] border-light">
      <ul className="flex justify-around gap-2 h-16 items-center bg-dark text-light px-4 py-2 text-lg w-full relative">
        {links.map((link) => {
          return (
            <li key={link.display} className="flex flex-1 justify-center">
              <Link href={link.link}>
                <p className="cursor-pointer">{link.display}</p>
              </Link>
            </li>
          );
        })}
        {/* <div
          className={clsx(
            xTransform,
            "w-24 border-[2px] border-light z-50 pointer-events-none absolute top-4 bottom-4 transition-transform ease-in-out"
          )}
        ></div> */}
      </ul>
    </div>
  );
};

export default NavBar;
