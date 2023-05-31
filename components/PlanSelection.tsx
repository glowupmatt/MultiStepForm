"use client";
import { PlanType } from "@/app/page";
import Footer from "./Footer";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import clsx from "clsx";
import { title } from "process";
import { Switch } from "@mui/material";
import MonthyPlan from "./MonthyPlan";

type PlanSelectionProps = {
  setPlan: Dispatch<SetStateAction<PlanType>>;
  plan: PlanType;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
};

const PlanSelection: React.FC<PlanSelectionProps> = ({
  setPlan,
  plan,
  checked,
  setChecked,
  setCurrentPage,
  currentPage,
}) => {
  const setPaymentInterval = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div className="flex justify-center items-center h-full relative bottom-[7rem] w-[95%]">
        <div className="flex flex-col items-start justify-start p-6 rounded-lg gap-4 bg-white">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <MonthyPlan checked={checked} plan={plan} setPlan={setPlan} />
            <div className="flex justify-between w-full bg-blue-light rounded items center p-3 items-center">
              <p>Monthly</p>
              <Switch checked={checked} onChange={setPaymentInterval} />
              <p>Yearly</p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("block w-full", { hidden: currentPage === 4 })}>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default PlanSelection;
