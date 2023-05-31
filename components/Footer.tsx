"use client";
import { CurrentPageType } from "@/app/page";
import { Dispatch, SetStateAction } from "react";

type FooterProps = {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
};

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const onClickHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const onBlickHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="p-4 bg-white w-full flex justify-between">
      <button
        disabled={currentPage === 0}
        onClick={onBlickHandler}
        className="text-gray-cool flex justify-center items-center"
      >
        <p>Go Back</p>
      </button>
      <button
        disabled={currentPage === 4}
        onClick={onClickHandler}
        className="px-4 py-2 rounded text-white flex justify-center items-center bg-blue-marine"
      >
        <p>{currentPage === 3 ? "Confirm" : "Next Step"}</p>
      </button>
    </div>
  );
};

export default Footer;
