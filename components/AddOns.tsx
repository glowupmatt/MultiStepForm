"use client";
import { Checkbox } from "@mui/material";
import Footer from "./Footer";
import { AppInfoType } from "@/app/page";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import MonthlyAddOns from "./MonthlyAddOns";

type AddOnsProps = {
  setAddOns: Dispatch<SetStateAction<AppInfoType[]>>;
  addOns: AppInfoType[];
  checked: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
};

const AddOns: React.FC<AddOnsProps> = ({
  setAddOns,
  addOns,
  checked,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <div className="flex items-center flex-col justify-between h-full">
      <div className="flex justify-center items-center h-full relative bottom-[9rem] w-[95%]">
        <div className="flex flex-col items-center justify-start p-6 rounded-lg gap-4 bg-white w-full">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <MonthlyAddOns
            checked={checked}
            setAddOns={setAddOns}
            addOns={addOns}
          />
        </div>
      </div>
      <div className={clsx("block w-full", { hidden: currentPage === 4 })}>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default AddOns;
