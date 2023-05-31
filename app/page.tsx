"use client";

import PersonalInfo from "@/components/PersonalInfo";
import PlanSelection from "@/components/PlanSelection";
import AddOns from "@/components/AddOns";
import Footer from "@/components/Footer";
import FinishingUp from "@/components/FinishingUp";
import ThankYou from "@/components/ThankYou";
import { useState, FC, ReactElement, JSXElementConstructor } from "react";
import Header from "@/components/Header";
import clsx from "clsx";

export type PersonalInfoType = {
  name: null | string;
  email: null | string;
  phoneNumber: null | string;
};

export type PlanType = {
  id: null | number;
  title: null | string;
  price: null | string;
  img: null | string;
  value: number;
};

export type PaymentPlanType = boolean;

export type AppInfoType = {
  id: number;
  title: string;
  desc: string;
  price: string;
  value: number;
};

export type UserInfoType = {
  personalInfo: PersonalInfoType;
  plan: PlanType;
  addOns: AppInfoType[];
};

export type CurrentPageType = number;

export default function Home() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    name: null,
    email: null,
    phoneNumber: null,
  });

  const [plan, setPlan] = useState<PlanType>({
    id: null,
    title: null,
    price: null,
    img: null,
    value: 0,
  });

  const [checked, setChecked] = useState<PaymentPlanType>(false);

  const [addOns, setAddOns] = useState<AppInfoType[]>([]);

  const userInfo: UserInfoType = { personalInfo, plan, addOns };
  console.log(plan);
  console.log(addOns);
  console.log(userInfo);

  const [currentPage, setCurrentPage] = useState<CurrentPageType>(0);
  console.log(currentPage);

  const pages = [
    <PersonalInfo
      key="personal-info"
      currentPage={currentPage}
      personalInfo={personalInfo}
      setPersonalInfo={setPersonalInfo}
      setCurrentPage={setCurrentPage}
    />,
    <PlanSelection
      key="plan-selection"
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      plan={plan}
      setPlan={setPlan}
      checked={checked}
      setChecked={setChecked}
    />,
    <AddOns
      key="add-ons"
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      addOns={addOns}
      setAddOns={setAddOns}
      checked={checked}
    />,
    <FinishingUp
      key="finishing-up"
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      plan={plan}
      addOns={addOns}
      userInfo={userInfo}
      checked={checked}
    />,
    <ThankYou key="thank-you" />,
  ];

  return (
    <main>
      <div className="flex flex-col bg-gray-light h-screen w-screen ">
        <div className="flex flex-col h-full items-center w-full">
          <div>
            <Header currentPage={currentPage} />
          </div>
          <div className="flex flex-col justify-between h-full items-center">
            {pages[currentPage]}
          </div>
        </div>
      </div>
    </main>
  );
}
