import clsx from "clsx";
import React from "react";
import Image from "next/image";

type HeaderProps = {
  currentPage: number;
};

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="flex items-center justify-center ">
      <header className="flex flex-col w-full h-full">
        <img className="w-[27rem]" alt="" src="/images/bg-sidebar-mobile.svg" />
        <div className="flex relative bottom-[7rem] items-center justify-center gap-4">
          {numbers.map((number, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "flex p-4 rounded-full w-4 h-4 items-center justify-center ",
                  {
                    "bg-[#BEE2FD] text-black": currentPage === index,
                    "bg-transparent border-solid border border-white text-white":
                      currentPage !== index,
                  }
                )}
              >
                {number}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Header;
