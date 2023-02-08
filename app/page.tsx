import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-dark text-light justify-center min-h-[calc(100vh-118px)]">
      <div className="flex flex-[0.5] flex-col items-between h-full">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 w-full mx-auto md:max-w-md overflow-hidden relative">
          <Image
            src={"/logo.png"}
            width="1080"
            height="1080"
            alt={"logo"}
            className="flex flex-1 w-full mx-auto md:max-w-md"
          />
          <div className="absolute inset-0 blurry-edge z-10"></div>
        </div>
        <h2 className="text-center flex flex-col flex-[0.5] justify-center text-lg">
          sup with food
          <br />
          in this city
        </h2>
      </div>
    </div>
  );
}
