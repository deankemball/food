import clsx from "clsx";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface TitleBarProps {
  showHeader: boolean;
  setShowHeader: Dispatch<SetStateAction<boolean>>;
}

const TitleBar = ({ showHeader, setShowHeader }: TitleBarProps) => {
  const router = useRouter();
  const path = usePathname();
  const [pathTitle, setPathTitle] = useState<string>("");

  useEffect(() => {
    setPathTitle(
      path?.includes("posts")
        ? path.split("posts/")[1].replaceAll("-", " ")
        : ""
    );
    setShowHeader(Boolean(!path?.includes("posts")));
  }, [path]);

  return (
    <div className="overflow-x-clip top-0 left-0 right-0 sticky z-50">
      <div
        className={clsx(
          showHeader ? "translate-x-0" : "-translate-x-[50%]",
          "h-16 w-[200vw] flex items-center justify-start transition-transform duration-300 text-light bg-dark border-y-[2px] border-light text-2xl"
        )}
      >
        <h1 className="flex flex-1 w-[100vw] justify-center">roasted.fyi</h1>
        <div className="flex flex-1 w-[100vw] justify-center relative">
          <button
            onClick={() => {
              router.back();
            }}
            className="flex w-full justify-center px-4"
          >
            <span className="flex w-4">{"<"}</span>
            <span className="flex flex-1 justify-center -translate-x-2 leading-none">
              {pathTitle}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
