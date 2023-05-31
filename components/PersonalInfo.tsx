"use client";

import { PersonalInfoType } from "@/app/page";
import { Dispatch, ReactNode, useState } from "react";
import { SetStateAction } from "react";
import { ChangeEvent } from "react";
import Footer from "./Footer";
import clsx from "clsx";

type PersonalInfoProps = {
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfoType>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  personalInfo: PersonalInfoType;
  currentPage: number;
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  setPersonalInfo,
  setCurrentPage,
  personalInfo,
  currentPage,
}) => {
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const phoneNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prev) => {
      return { ...prev, phoneNumber: e.target.value };
    });
  };

  return (
    <div className="flex flex-col justify-between w-full h-full items-center">
      <div className="flex flex-col items-center justify-center p-6 rounded-lg gap-4 bg-white relative bottom-[5rem] w-[95%] ">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <form className="flex flex-col justify-between items-start w-full gap-4">
          <div className="w-full flex flex-col gap-4">
            <h4>Name</h4>
            <input
              onChange={nameChangeHandler}
              className="border-solid border-slate-400 border rounded p-1 w-full"
              type="text"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="w-full">
            <h4>Email Address</h4>
            <input
              onChange={emailChangeHandler}
              className="border-solid border-slate-400 border rounded p-1 w-full"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="w-full">
            <h4>Phone Number</h4>
            <input
              onChange={phoneNumberChangeHandler}
              className="border-solid border-slate-400 border rounded p-1 w-full"
              type="number"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </div>
      <div className={clsx("block w-full", { hidden: currentPage === 4 })}>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default PersonalInfo;
