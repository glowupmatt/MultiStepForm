"use client";
import { userInfo } from "os";
import Footer from "./Footer";
import {
  UserInfoType,
  AppInfoType,
  PlanType,
  PaymentPlanType,
} from "@/app/page";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

type UserInfoProps = {
  userInfo: UserInfoType;
  addOns: AppInfoType[];
  plan: PlanType;
  checked: PaymentPlanType;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
};

const FinishingUp = ({
  userInfo,
  addOns,
  plan,
  checked,
  setCurrentPage,
  currentPage,
}: UserInfoProps) => {
  const addOnsTotal = () => {
    let total = 0 + plan.value;
    for (let i = 0; i < addOns.length; i++) {
      total += addOns[i].value;
    }
    // const addOnsValue = addOns.forEach((price) => {
    //   return price.value;
    // });
    return total.toString();
  };

  const total: string = addOnsTotal();

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex justify-center items-center h-full relative bottom-[8rem]">
        <div className="flex flex-col items-center justify-center p-6 rounded-lg gap-4 bg-white w-[95%]">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
          </div>
          <div className="flex flex-col bg-blue-light p-4 w-full gap-4 rounded">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <h3>{plan.title}</h3>
                <p>Change</p>
              </div>
              <p>{plan.price}</p>
            </div>
            <hr className="border-gray-cool" />
            <div className="flex flex-col gap-3">
              {userInfo.addOns.map((items, index) => {
                return (
                  <div className="flex justify-between" key={index}>
                    <p className="text-gray-cool">{items.title}</p>
                    <p>{items.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between w-full p-4">
            <p className="text-gray-cool">
              Total (per {!checked ? "month" : "year"})
            </p>
            <h3>+${total}/mo</h3>
          </div>
        </div>
      </div>
      <div className={clsx("block w-full", { hidden: currentPage === 4 })}>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default FinishingUp;
